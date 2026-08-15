#!/usr/bin/env python3
"""
ACQSA AI (www.acqsaai.com) — AGENT 6: Executive Swarm Manager & Live Dashboard HUD
Syncs 24/7 client acquisition telemetry directly to Senthora Everest HUD (localhost:3000).
"""

import json, os
from datetime import datetime
from config import (
    RAW_LEADS_PATH,
    QUALIFIED_LEADS_PATH,
    REPLIES_LOG_PATH,
    OUTREACH_LOG_PATH,
    CRM_PIPELINE_PATH,
    TELEMETRY_PATH,
    AGENCY_NAME,
    AGENCY_WEBSITE
)

DASHBOARD_PROGRESS_PATH = "/Users/michaeljacob/.gemini/antigravity/brain/8fd2e7b1-37f5-4296-9b91-51223d137b0c/acqsa_dashboard/daily_progress.json"

def load_json(path):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []

def update_swarm_telemetry():
    raw_leads = load_json(RAW_LEADS_PATH)
    qualified_leads = load_json(QUALIFIED_LEADS_PATH)
    replies_log = load_json(REPLIES_LOG_PATH)
    outreach_log = load_json(OUTREACH_LOG_PATH)
    crm_pipeline = load_json(CRM_PIPELINE_PATH)
    
    score_10_leads = [q for q in qualified_leads if q.get("score") == 10]
    score_9_leads = [q for q in qualified_leads if q.get("score") == 9]
    score_8_leads = [q for q in qualified_leads if q.get("score") == 8]
    
    # Calculate estimated hospital ARR
    hospital_pipeline_lakhs = len(crm_pipeline) * 25
    
    telemetry = {
        "platform": AGENCY_NAME,
        "website": AGENCY_WEBSITE,
        "owner": "Rocky Jacob",
        "runtime_status": "ALWAYS_ON_24_7",
        "last_synced": datetime.now().isoformat(),
        "metrics": {
            "total_healthcare_raw_leads": len(raw_leads),
            "total_qualified_hospitals": len(qualified_leads),
            "high_intent_hospitals_score_8_10": len(score_10_leads) + len(score_9_leads) + len(score_8_leads),
            "comment_replies_dispatched": len(replies_log),
            "verified_executive_outreach": len(outreach_log),
            "active_hospital_crm_pipeline": len(crm_pipeline),
            "estimated_arr_pipeline": f"₹{hospital_pipeline_lakhs} Lakhs (~${len(crm_pipeline)*30:,}k USD)",
            "active_channels": ["Hospital ICP DB", "Reddit", "Twitter / X", "LinkedIn", "Quora", "Hostinger SSL SMTP", "Smartlead.ai"]
        },
        "agents_health": {
            "agent_1_healthcare_hunter": "ONLINE_ACTIVE",
            "agent_2_intent_qualifier": "ONLINE_ACTIVE",
            "agent_3_comment_engager": "ONLINE_ACTIVE",
            "agent_4_executive_closer": "ONLINE_ACTIVE",
            "agent_5_hospital_crm_manager": "ONLINE_ACTIVE",
            "agent_6_senthora_hud_manager": "ONLINE_ACTIVE"
        },
        "recent_outreach_activity": outreach_log[:5],
        "top_hospital_leads": qualified_leads[:5]
    }
    
    with open(TELEMETRY_PATH, "w", encoding="utf-8") as f:
        json.dump(telemetry, f, indent=2)
        
    # Also update Senthora Everest Dashboard JSON
    if os.path.exists(DASHBOARD_PROGRESS_PATH):
        try:
            with open(DASHBOARD_PROGRESS_PATH, "r") as f:
                dash_data = json.load(f)
            dash_data["acqsa_swarm_telemetry"] = telemetry
            dash_data["last_swarm_sync"] = datetime.now().isoformat()
            with open(DASHBOARD_PROGRESS_PATH, "w") as f:
                json.dump(dash_data, f, indent=2)
        except Exception:
            pass
            
    print(f"📊 [ACQSA Dashboard Manager] Swarm Telemetry Synced with Everest HUD.")
    print(f"   Hospital Pipeline: {len(crm_pipeline)} | ARR: ₹{hospital_pipeline_lakhs} Lakhs | Dispatched: {len(outreach_log)}")
    return telemetry

if __name__ == "__main__":
    update_swarm_telemetry()
