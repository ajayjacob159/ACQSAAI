"""
ACQSA AI (www.acqsaai.com) — 24/7 HEALTHCARE CLIENT ACQUISITION SWARM
Owner: Rocky Jacob | Platform: ACQSA AI Enterprise
Intelligent Voice Agents, WhatsApp OPD Schedulers, Cashless TPA Pre-Auth & Clinical Automation
"""

import os
from pathlib import Path

# Base Paths
BASE_DIR = Path(__file__).resolve().parent
LEADS_DIR = BASE_DIR / "leads"
LEADS_DIR.mkdir(parents=True, exist_ok=True)

RAW_LEADS_PATH = LEADS_DIR / "raw_leads.json"
QUALIFIED_LEADS_PATH = LEADS_DIR / "qualified_leads.json"
REPLIES_LOG_PATH = LEADS_DIR / "replies_log.json"
OUTREACH_LOG_PATH = LEADS_DIR / "outreach_log.json"
CRM_PIPELINE_PATH = LEADS_DIR / "crm_pipeline.json"
TELEMETRY_PATH = LEADS_DIR / "swarm_telemetry.json"
HOSPITAL_ICP_CSV = Path("/Users/michaeljacob/.gemini/antigravity/brain/8fd2e7b1-37f5-4296-9b91-51223d137b0c/acqsa_20k_hospital_icp_leads.csv")

# ACQSA AI Brand Assets & Authority
AGENCY_NAME = "ACQSA AI"
AGENCY_FULL_TITLE = "ACQSA AI — Intelligent Healthcare Operating System"
AGENCY_WEBSITE = "https://www.acqsaai.com"
FOUNDER_NAME = "Rocky Jacob"
FOUNDER_ROLE = "Founder & CEO, ACQSA AI"
CALENDLY_URL = "https://calendly.com/rockyjacob-ai/30min"

# Credentials & API Keys (Verified Active)
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "8605382934:AAEYaehMipYzjn4VWKVDmSVLyNonf9_-QYo")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "8976047512")

# Email Dispatch Gateway (Hostinger SSL SMTP - 100% DKIM/SPF/DMARC Verified)
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.hostinger.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ.get("SMTP_USER", "ceo@acqsaai.com")
SMTP_PASS = os.environ.get("SMTP_PASS", "9030531872@Ajay")
SENDER_NAME = "Rocky Jacob | ACQSA AI"

# ACQSA AI Healthcare Intent Keyword Groups
GROUP_A_KEYWORDS = [
    "looking for AI healthcare automation",
    "hospital OPD call loss",
    "need AI voice agent for hospital",
    "cashless pre-auth automation",
    "TPA claim delay",
    "hire healthcare AI agency",
    "automated patient appointment booking",
    "AI clinical documentation",
    "hospital revenue cycle automation",
    "need AI appointment setter for clinic"
]

GROUP_B_KEYWORDS = [
    "tired of missed patient calls",
    "front desk phone overload hospital",
    "how to automate OPD booking",
    "EMR integration with WhatsApp",
    "specialty clinic lead drop-off",
    "dental clinic appointment no-shows",
    "IVF patient follow-up automation",
    "hospital bed occupancy drop",
    "manual patient intake too slow"
]

TARGET_SUBREDDITS = [
    "healthIT",
    "healthcare",
    "medicine",
    "SaaS",
    "automation",
    "smallbusiness",
    "Entrepreneur",
    "AI_Agents"
]

# Anti-Ban Guardrails
RATE_LIMITS = {
    "min_action_delay_sec": 15,
    "max_action_delay_sec": 45,
    "max_comments_per_day": 25,
    "max_outreach_per_day": 40,
    "hunter_interval_min": 10,
    "qualifier_interval_min": 15,
    "crm_check_interval_min": 30
}
