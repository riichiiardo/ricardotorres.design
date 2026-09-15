#!/usr/bin/env python3
"""Extracts visual assets from the public Figma embed viewer.
Step 1: zoom-to-fit overview. Step 2+: click frames, zoom to selection, capture."""
import sys
from playwright.sync_api import sync_playwright

EMBED = "https://embed.figma.com/design/pULp5giaNMkxaVYluRHWJT/Portafolio?embed-host=oembed&node-id=125-88&page-selector=1&theme=light"
mode = sys.argv[1] if len(sys.argv) > 1 else "overview"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 2560, "height": 1440}, device_scale_factor=2)
    page.goto(EMBED, wait_until="networkidle", timeout=90000)
    page.wait_for_timeout(12000)
    # dismiss possible cookie banners
    for sel in ["button:has-text('Accept')", "button:has-text('OK')", "button:has-text('Got it')"]:
        try:
            page.click(sel, timeout=1500)
        except Exception:
            pass
    page.keyboard.press("Shift+1")  # zoom to fit
    page.wait_for_timeout(3000)
    page.screenshot(path="/tmp/figma_overview.png")
    print("overview saved")
    browser.close()
