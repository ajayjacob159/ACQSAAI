#!/usr/bin/env python3
"""
AGENT 3: The Engager — Value-First Comment Reply Agent
Input: Reads /leads/qualified_leads.json (Score 7 Leads).
Output: Generates human-like, value-first mini-framework comments and logs to /leads/replies_log.json.
Rules: No hashtags, no emoji spam, soft Loom CTA, anti-ban pacing.
"""

import json, time, random
from datetime import datetime
from config import QUALIFIED_LEADS_PATH, REPLIES_LOG_PATH, RATE_LIMITS

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

def generate_value_comment(lead):
    pain = lead.get("pain_point", "").lower()
    service = lead.get("service_needed", "")
    name = lead.get("name", "there")
    company = lead.get("company", "your team")
    
    if "support" in pain or "ticket" in pain:
        return (
            f"We fixed this exact bottleneck for a B2B founder using a lightweight n8n + GPT triage webhook. "
            f"It auto-categorizes incoming tickets, drafts replies for human approval, and cuts response latency by 85%. "
            f"Happy to drop the workflow diagram if it helps {company}."
        )
    elif "appointment" in pain or "setter" in pain or "follow" in pain:
        return (
            f"Most founders lose 60% of inbound leads because follow-up takes longer than 5 minutes. "
            f"We deployed an automated AI setter that triggers within 15 seconds across WhatsApp/SMS and syncs to calendar. "
            f"Built this for 3 founders last week—happy to share the Loom breakdown if you want."
        )
    elif "zapier" in pain or "make" in pain or "n8n" in pain:
        return (
            f"Zapier gets brutal at scale once you cross 10k tasks. Moving the heavy webhook routing to self-hosted n8n drops operational cost by ~80% while giving you full JSON flexibility. "
            f"Happy to share our migration template if you are exploring alternatives."
        )
    else:
        return (
            f"We solved this recently by connecting an AI agent directly to the CRM to handle lead enrichment and automated outreach in real time. "
            f"Saves the founder ~15 hours every week of manual grunt work. Lmk if you want the workflow map, happy to share."
        )

def run_engager_cycle():
    print(f"\n💬 [Agent 3: The Engager] Starting Comment Reply Engine at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}...")
    qualified_leads = load_json(QUALIFIED_LEADS_PATH)
    replies_log = load_json(REPLIES_LOG_PATH)
    replied_lead_ids = {r["lead_id"] for r in replies_log if "lead_id" in r}
    
    pending_leads = [
        l for l in qualified_leads 
        if l.get("score") == 7 and l.get("id") not in replied_lead_ids and not l.get("processed_by_engager")
    ]
    
    print(f"  Found {len(pending_leads)} Score-7 leads awaiting value comments.")
    replies_sent = 0
    
    for lead in pending_leads[:5]:  # Process up to 5 per cycle for anti-ban safety
        comment_body = generate_value_comment(lead)
        reply_entry = {
            "lead_id": lead.get("id"),
            "target_name": lead.get("name"),
            "platform": lead.get("platform"),
            "post_url": lead.get("post_url"),
            "comment_body": comment_body,
            "status": "PUBLISHED_SIMULATED",
            "timestamp": datetime.now().isoformat()
        }
        replies_log.insert(0, reply_entry)
        lead["processed_by_engager"] = True
        replies_sent += 1
        
        print(f"  💬 [COMMENT POSTED] To {lead.get('name')} on {lead.get('platform')}")
        print(f"     \"{comment_body}\"")
        
        # Anti-ban simulated delay
        delay = random.uniform(1.0, 3.0)
        time.sleep(delay)
        
    save_json(REPLIES_LOG_PATH, replies_log)
    save_json(QUALIFIED_LEADS_PATH, qualified_leads)
    print(f"✅ [Agent 3: The Engager] Cycle Finished. {replies_sent} value comments dispatched. Total Logged: {len(replies_log)}")
    return replies_sent

if __name__ == "__main__":
    run_engager_cycle()
