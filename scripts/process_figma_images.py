#!/usr/bin/env python3
"""Process extracted Figma renders into web assets: card crops + full boards."""
from PIL import Image
import os

SRC = "/tmp/figma_assets"
OUT = "/app/frontend/public/images/projects"
os.makedirs(OUT, exist_ok=True)

def save(img, name, q=84):
    img.convert("RGB").save(f"{OUT}/{name}.jpg", quality=q, optimize=True)
    print(name, img.size, os.path.getsize(f"{OUT}/{name}.jpg") // 1024, "KB")

def crop(src, name, l, t, r, b):
    img = Image.open(f"{SRC}/{src}")
    w, h = img.size
    save(img.crop((int(w*l), int(h*t), int(w*r), int(h*b))), name)

def board(src, name):
    img = Image.open(f"{SRC}/{src}")
    save(img, name, q=80)

# Card crops (device hero regions of each project board / work card)
crop("1_911.png",  "fundacion-santa-fe-card", 0.0, 0.0, 0.52, 1.0)
crop("1_928.png",  "telefonica-movistar-card", 0.44, 0.0, 1.0, 1.0)
crop("1_1524.png", "datarips-card", 0.42, 0.02, 1.0, 0.28)
crop("1_1284.png", "mediqu-card", 0.02, 0.03, 0.62, 0.28)
crop("1_1341.png", "wealth-ocean-card", 0.40, 0.03, 1.0, 0.30)
crop("1_1475.png", "corporal-move-card", 0.03, 0.03, 0.60, 0.26)

# Full project boards for case study pages
board("1_1012.png", "fundacion-santa-fe-board")
board("1_1210.png", "telefonica-movistar-board")
board("1_1524.png", "datarips-board")
board("1_1284.png", "mediqu-board")
board("1_1341.png", "wealth-ocean-board")
board("1_1475.png", "corporal-move-board")

# Design system artifacts
board("1_12101.png", "design-system-colors")
board("1_12259.png", "design-system-typography")
board("1_11371.png", "design-system-buttons")
