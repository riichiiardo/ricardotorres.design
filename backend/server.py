from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
from datetime import datetime, timezone
from html import escape

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Ricardo Torres Portfolio")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "ricardo_torres612@hotmail.com")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default="", max_length=160)
    message: str = Field(min_length=10, max_length=4000)


@api_router.get("/")
async def root():
    return {"message": "Ricardo Torres Portfolio API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


async def notify_owner(msg: ContactMessage) -> bool:
    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY not configured; message stored without email notification")
        return False
    import httpx
    name, company, body = escape(msg.name), escape(msg.company or "—"), escape(msg.message)
    html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif">'
        f'<h2 style="margin:0 0 16px">New portfolio enquiry</h2>'
        f'<p><strong>Name:</strong> {name}<br><strong>Email:</strong> {escape(msg.email)}<br>'
        f'<strong>Company:</strong> {company}</p>'
        f'<p style="padding:16px;background:#f4f4f2">{body}</p>'
        f'<p style="font-size:12px;color:#888">Sent from the contact form on {escape(EMAIL_FROM_NAME)}. Reply directly to respond to the sender.</p>'
        '</td></tr></table>'
    )
    payload = {
        "to": [OWNER_EMAIL],
        "subject": f"Portfolio enquiry — {msg.name}",
        "html": html,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": msg.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as http:
            resp = await http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return True
    except Exception as e:
        logger.error(f"Email send error: {e}")
        return False


@api_router.post("/contact")
async def submit_contact(msg: ContactMessage):
    doc = msg.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["timestamp"] = datetime.now(timezone.utc).isoformat()
    await db.contact_messages.insert_one(doc)
    emailed = await notify_owner(msg)
    return {"status": "ok", "emailed": emailed}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
