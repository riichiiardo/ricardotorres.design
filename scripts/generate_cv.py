#!/usr/bin/env python3
"""Generates a clean, ATS-friendly CV PDF from the brief's source data.
Replace /app/frontend/public/Ricardo_Torres_UX_UI_Project_Lead_CV.pdf with
Ricardo's own CV file when provided — the site links to that path."""
from fpdf import FPDF

ACCENT = (230, 57, 70)
INK = (17, 18, 21)
MUTED = (85, 88, 97)

class CV(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("helvetica", "I", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 8, f"Ricardo Andrei Torres Medina - UX/UI Project Lead - Page {self.page_no()}", align="C")

    def section(self, title):
        self.ln(4)
        self.set_font("helvetica", "B", 11)
        self.set_text_color(*ACCENT)
        self.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(200, 200, 200)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body(self, text):
        self.set_font("helvetica", "", 9.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 4.8, text)

    def role(self, period, title, company, desc):
        self.set_font("helvetica", "B", 10.5)
        self.set_text_color(*INK)
        self.cell(0, 5.5, title, new_x="LMARGIN", new_y="NEXT")
        self.set_font("helvetica", "", 9.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, f"{company}  |  {period}", new_x="LMARGIN", new_y="NEXT")
        self.body(desc)
        self.ln(2)

cv = CV(format="A4")
cv.set_auto_page_break(True, 18)
cv.set_margins(18, 16, 18)
cv.add_page()

cv.set_font("helvetica", "B", 20)
cv.set_text_color(*INK)
cv.cell(0, 10, "Ricardo Andrei Torres Medina", new_x="LMARGIN", new_y="NEXT")
cv.set_font("helvetica", "", 11)
cv.set_text_color(*ACCENT)
cv.cell(0, 6, "UX/UI Project Lead | Digital Product Designer | AI & Conversational UX", new_x="LMARGIN", new_y="NEXT")
cv.set_font("helvetica", "", 9.5)
cv.set_text_color(*MUTED)
cv.cell(0, 5.5, "Bogota, Colombia  |  +57 300 368 9447  |  ricardo_torres612@hotmail.com", new_x="LMARGIN", new_y="NEXT")
cv.cell(0, 5.5, "linkedin.com/in/riichiiardo", new_x="LMARGIN", new_y="NEXT")

cv.section("Professional Profile")
cv.body(
    "UX/UI Project Lead and Digital Product Designer experienced in taking complex digital products from problem "
    "definition to delivery: discovery, user research, information architecture, interaction design, design systems, "
    "prototyping and usability validation. Specialized in AI product design, conversational UX, voice UX and data "
    "visualization, with strong stakeholder management and cross-functional collaboration in agile environments."
)

cv.section("Experience")
cv.role("07/2022 - Present", "Experienced Consultant - UX/UI Designer", "Amaris Consulting",
        "UX/UI consulting on complex digital products: discovery, UX research, design systems, interaction design and "
        "usability validation in cross-functional agile teams.")
cv.role("05/2021 - 06/2022", "UX/UI Designer", "Agata Data - Agencia Analitica de Datos",
        "Designed data-driven digital products: dashboards, data visualization and analytics-informed experiences "
        "for decision support.")
cv.role("03/2019 - 05/2021", "UX/UI Designer", "Monky Publicidad",
        "Designed websites and digital campaign experiences; evolved from visual design into user-centered product "
        "design practice.")
cv.role("02/2019 - 11/2019", "UI Designer", "Soft Dev Team",
        "Interface design for software products in a development-driven environment; close collaboration with "
        "engineering teams.")

cv.section("Selected Projects")
for line in [
    "Fundacion Santa Fe de Bogota - Design system, mobile applications, website experiences, UX research and usability testing (UXCam, Hotjar, Maze).",
    "Telefonica / Movistar - Operational UX for home service installation and validation; design system; field technician experience; usability monitoring.",
    "Secretaria Distrital de Salud - AI-based COVID-19 case measurement and outbreak interpretation; intranet experience integrated with Power BI.",
    "Secretaria Distrital de Gobierno - Voice UX experience for citizen profile management on Google Cloud Platform (smartphones, computers, microphone-enabled devices).",
    "Additional work - GABO / Alcaldia de Bogota, DataRips, Corporal Move, Wealth Ocean, MediQu, 321 Ignition.",
]:
    cv.set_font("helvetica", "", 9.5)
    cv.set_text_color(*INK)
    cv.multi_cell(0, 4.8, "- " + line)
    cv.ln(1)

cv.section("Capabilities")
cv.body(
    "Product Design, UX/UI, UX Research, User Research, Usability Testing, Information Architecture, Interaction "
    "Design, Design Systems, Wireframing, Prototyping, Design Thinking, Human-Centered Design, Design Sprint, "
    "AI Product Design, Conversational UX, Voice UX, Data Visualization, UX Analytics, Project Leadership, "
    "Stakeholder Management, Agile, Scrum."
)

cv.section("Tools & Technologies")
cv.body(
    "Design: Figma, Adobe XD, Sketch, Illustrator, Photoshop.\n"
    "Research & Analytics: UXCam, Hotjar, Maze, Power BI.\n"
    "Project & Delivery: Jira, Azure DevOps, Notion, Scrum, Agile.\n"
    "Digital & Technical: HTML, CSS, Webflow, Postman.\n"
    "Cloud & Engineering: Azure, Google Cloud Platform, Argo, SonarQube, Kiuwan."
)

out = "/app/frontend/public/Ricardo_Torres_UX_UI_Project_Lead_CV.pdf"
cv.output(out)
print("written", out)
