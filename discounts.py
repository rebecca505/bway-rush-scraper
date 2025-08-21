import asyncio
from bs4 import BeautifulSoup
from playwright.async_api import async_playwright
import requests
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()
SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
OUTPUT_FILE = "new_discounts.txt" #Contains previously discounted shows (avoids repeats)

async def check_discounts(): #Reads the bway rush HTML content
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("https://bwayrush.com/", wait_until="networkidle")
        html = await page.content()
        await browser.close()

    soup = BeautifulSoup(html, "html.parser")
    new_discounts = soup.find_all("div", class_="discount-new") #Find all "discount-new" div tags

    existing_discounts = set()
    if os.path.exists(OUTPUT_FILE): #Checks for previously logged discounts
        with open(OUTPUT_FILE, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("---"): #Avoids logged time
                    existing_discounts.add(line) #Logs previously saved discounts
    
    new_entries = []
    for disc_div in new_discounts:
        p_discount = disc_div.find_parent("div", class_="discount")
        if p_discount: #Parent discount div exists
            show_tag = p_discount.find_previous("a") #Find <a> tag -- gets show title
            show = show_tag.get_text(strip=True) if show_tag else "Unknown Show"

            disc_tag = p_discount.find("div", class_="discount-info") #Find type of discount
            disc = disc_tag.get_text(strip=True) if disc_tag else "Unknown Discount"

            entry = f"{disc}, {show}"
            if entry not in existing_discounts: 
                new_entries.append(entry)
    
    if new_entries: #if there are new entries
        slack_message = ":tada: New discounts found:\n" + "\n".join(f"{i+1}. {line}" for i, line in enumerate(new_entries))
        requests.post(SLACK_WEBHOOK_URL, json={"text": slack_message}) #Send message to Slack
        print(slack_message) #Print to console

        with open(OUTPUT_FILE, "a") as f: #Add entries (with timestamps)
            f.write(f"\n--- {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ---\n")
            for line in new_entries:
                f.write(line + "\n")

        print(f"Saved {len(new_entries)} new discounts to {OUTPUT_FILE}")
    else:
        print("No new discounts found (all already logged).")

asyncio.run(check_discounts())
