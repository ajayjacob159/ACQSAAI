#!/usr/bin/env python3
"""
ACQSA AI (www.acqsaai.com) — AGENT 4: The Healthcare Closer
Sends high-converting, 3-line healthcare pain-specific outreach from ceo@acqsaai.com via Hostinger SSL SMTP.
"""

import json, smtplib, ssl, time, random
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import (
    QUALIFIED_LEADS_PATH,
    OUTREACH_LOG_PATH,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SENDER_NAME,
    CALENDLY_URL,
    AGENCY_NAME,
    AGENCY_WEBSITE
)

def load_json(path):
    if path.exists():
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def generate_healthcare_outreach(lead):
    name = lead.get("name", "Medical Director / COO")
    company = lead.get("company", "your hospital group")
    pain = lead.get("pain_point", "OPD Call Drop-off & TPA delays")
    
    # Customized healthcare value prop
    if "dental" in pain.lower() or "dental" in company.lower():
        subject = f"Quick question for {company} re: 40% OPD Call Recovery"
        opening = f"Your OPD front desk at {company} is likely losing 35-40% of appointment calls during morning rush hours."
        hook = "ACQSA AI deploys an Intelligent Voice Agent that answers every patient call in 2 seconds — 24/7, booking appointments directly into your system."
        result = "35% appointment increase & ₹15 Lakhs additional monthly clinic revenue."
    elif "pre-auth" in pain.lower() or "tpa" in pain.lower() or "cashless" in pain.lower():
        subject = f"Cashless Pre-Auth in 3 Minutes for {company}"
        opening = f"TPA cashless pre-authorizations are currently causing 3-4 hour discharge delays and administrative fatigue at {company}."
        hook = "ACQSA AI's Cashless Pre-Auth Agent automates document verification, policy checking, and submission in under 3 minutes."
        result = "90% reduction in pre-auth turnaround time and zero patient waiting room friction."
    else:
        subject = f"Quick question for {company} re: OPD Revenue Recovery"
        opening = f"Hospital groups like {company} routinely lose an estimated ₹25 Lakhs/month to unanswered OPD patient inquiries and manual scheduling delays."
        hook = "ACQSA AI's Healthcare Voice & WhatsApp Agent answers every call in 2 seconds, schedules consultations, and automates patient intake 24/7."
        result = "94% call answer rate, zero additional staff, and ₹22 Lakhs recovered monthly revenue."

    body_plain = (
        f"Hi {name},\n\n"
        f"{opening}\n\n"
        f"{hook}\n\n"
        f"Key 30-day impact: {result}\n\n"
        f"Would you be open to a 15-minute demo to see how we deployed this for similar healthcare leaders? No pitch.\n\n"
        f"Direct Demo Calendar: {CALENDLY_URL}\n\n"
        f"Best regards,\n"
        f"Rocky Jacob\n"
        f"Founder & CEO — ACQSA AI\n"
        f"📧 {SMTP_USER} | 🌐 {AGENCY_WEBSITE}"
    )

    html_body = f"""<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.65; color: #1a202c; max-width: 580px; padding: 24px; background: #ffffff;">
<div style="border-top: 4px solid #0072ff; padding-top: 20px;">
    <p style="font-size: 15px; margin-bottom: 14px;">Hi {name},</p>
    <p style="font-size: 14px; margin-bottom: 14px; color: #2d3748;">{opening}</p>
    <p style="font-size: 14px; margin-bottom: 14px; color: #2d3748;">{hook}</p>
    <div style="background: #f7fafc; border-left: 4px solid #00c6ff; padding: 12px 16px; margin: 18px 0; border-radius: 4px;">
        <strong style="color: #2b6cb0; font-size: 13px;">PROVEN 30-DAY DELIVERABLE:</strong>
        <p style="margin: 4px 0 0 0; font-size: 14px; color: #2d3748;">✅ {result}</p>
    </div>
    <p style="font-size: 14px; margin-bottom: 20px;">Would a 15-minute live demonstration make sense for {company} this week?</p>
    <p style="margin: 22px 0;">
        <a href="{CALENDLY_URL}" style="display: inline-block; background: linear-gradient(135deg, #0072ff, #00c6ff); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px;">Book a 15-Min Healthcare Demo &rarr;</a>
    </p>
    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #4a5568;">
        <strong>Rocky Jacob</strong><br>
        Founder & CEO — <strong>ACQSA AI</strong><br>
        📧 <a href="mailto:{SMTP_USER}" style="color: #0072ff; text-decoration: none;">{SMTP_USER}</a> | 🌐 <a href="{AGENCY_WEBSITE}" style="color: #0072ff; text-decoration: none;">{AGENCY_WEBSITE}</a><br>
        🏥 <em>Intelligent Voice, WhatsApp & Clinical Operating System for Hospitals</em>
    </div>
</div>
</body>
</html>"""
    return subject, body_plain, html_body

def dispatch_email(to_email, subject, plain_text, html_text):
    """Dispatches cold outreach email via Hostinger SSL SMTP."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{SENDER_NAME} <{SMTP_USER}>"
    msg["To"] = to_email
    msg["Reply-To"] = SMTP_USER
    
    msg.attach(MIMEText(plain_text, "plain", "utf-8"))
    msg.attach(MIMEText(html_text, "html", "utf-8"))
    
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context, timeout=12) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, to_email, msg.as_string())
            return True, "250 OK Delivered"
    except Exception as e:
        return False, str(e)

def run_closer_cycle():
    print(f"\n🎯 [ACQSA Closer Agent] Starting Healthcare Outreach at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}...")
    qualified_leads = load_json(QUALIFIED_LEADS_PATH)
    outreach_log = load_json(OUTREACH_LOG_PATH)
    contacted_ids = {o["lead_id"] for o in outreach_log if "lead_id" in o}
    
    high_intent_leads = [
        l for l in qualified_leads 
        if l.get("score", 0) >= 8 and l.get("id") not in contacted_ids and not l.get("processed_by_closer")
    ]
    
    print(f"  Found {len(high_intent_leads)} high-intent healthcare prospects awaiting outreach.")
    dispatched_count = 0
    
    for lead in high_intent_leads[:5]:
        subject, plain, html = generate_healthcare_outreach(lead)
        email_addr = lead.get("email", "")
        
        success, status_msg = dispatch_email(email_addr, subject, plain, html)
        
        outreach_record = {
            "lead_id": lead.get("id"),
            "name": lead.get("name"),
            "company": lead.get("company"),
            "platform": lead.get("platform"),
            "profile_url": lead.get("profile_url"),
            "post_url": lead.get("post_url"),
            "email": email_addr,
            "score": lead.get("score"),
            "service_needed": lead.get("service_needed"),
            "subject": subject,
            "outreach_body": plain,
            "email_status": status_msg,
            "stage": "OUTREACH_SENT",
            "followup_1_due": (time.time() + 48 * 3600),
            "followup_2_due": (time.time() + 96 * 3600),
            "replied": False,
            "dispatched_at": datetime.now().isoformat()
        }
        
        outreach_log.insert(0, outreach_record)
        lead["processed_by_closer"] = True
        dispatched_count += 1
        
        print(f"  🚀 [DISPATCHED] {lead.get('name')} ({lead.get('company')})")
        print(f"     Subject: {subject}")
        print(f"     Delivery: {status_msg}")
        
        time.sleep(random.uniform(2.0, 4.0))
        
    save_json(OUTREACH_LOG_PATH, outreach_log)
    save_json(QUALIFIED_LEADS_PATH, qualified_leads)
    print(f"✅ [ACQSA Closer Agent] Cycle Complete. {dispatched_count} outreaches sent. Total Logged: {len(outreach_log)}")
    return dispatched_count

if __name__ == "__main__":
    run_closer_cycle()
