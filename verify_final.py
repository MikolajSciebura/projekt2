import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Home page desktop - check testimonials
        await page.goto(f'file://{os.getcwd()}/index.html')
        await page.set_viewport_size({"width": 1280, "height": 3000})
        await page.screenshot(path='home_final_desktop.png', full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
