#!/usr/bin/env python3
from PIL import Image
import os

SRC = "/tmp/figma_assets"
OUT = "/app/frontend/public/images/projects"

def crop(src, name, l, t, r, b, q=84):
    img = Image.open(f"{SRC}/{src}")
    w, h = img.size
    out = img.crop((int(w*l), int(h*t), int(w*r), int(h*b)))
    out.convert("RGB").save(f"{OUT}/{name}.jpg", quality=q, optimize=True)
    print(name, out.size, os.path.getsize(f"{OUT}/{name}.jpg") // 1024, "KB")

crop("1_1524.png", "datarips-card", 0.455, 0.045, 0.965, 0.255)
crop("1_1284.png", "mediqu-card", 0.085, 0.05, 0.545, 0.26)
crop("1_1341.png", "wealth-ocean-card", 0.43, 0.05, 0.945, 0.275)
crop("1_1475.png", "corporal-move-card", 0.135, 0.095, 0.595, 0.245)
