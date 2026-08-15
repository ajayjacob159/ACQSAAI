#!/usr/bin/env python3
"""
AGENT 2: The Qualifier — Intent Classifier & Enrichment Agent
Input: Reads /leads/raw_leads.json.
Output: Classifies buying intent (1-10), enriches company/email/LinkedIn, and saves to /leads/qualified_leads.json.
Routing: Score >= 8 -> Agent 4 (DM), Score 7 -> Agent 3 (Comment), Score < 7 -> Rejected.
"""

import json, re
from datetime import datetime
from config import RAW_LEADS_PATH, QUALIFIED_LEADS_PATH

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

def infer_company_and_email(name, content, platform):
    """Smart enrichment logic to infer company name and professional email pattern."""
    clean_name = re.sub(r'[^a-zA-Z\s]', '', name).strip()
    first_name = clean_name.split()[0].lower() if clean_name else "founder"
    last_name = clean_name.split()[-1].lower() if len(clean_name.split()) > 1 else "team"
    
    # Try to extract company mentions from text
    company = "Founder Stealth Lab"
    company_match = re.search(r'(?:at|founder of|ceo of|building|running|our agency)\s+([A-Z][a-zA-Z0-9]+(?:\s+[A-Z][a-zA-Z0-9]+)?)', content)
    if company_match:
        company = company_match.group(1).strip()
    elif "saas" in platform.lower():
        company = f"{first_name.capitalize()} SaaS Systems"
    elif "linkedin" in platform.lower():
        company = f"{first_name.capitalize()} Media Group"
    else:
        company = f"{first_name.capitalize()} Automation Ventures"
        
    domain_slug = re.sub(r'[^a-zA-Z0-9]', '', company).lower()
    inferred_email = f"{first_name}@{domain_slug}.com"
    linkedin_url = f"https://linkedin.com/in/{first_name}-{last_name}"
    
    return company, inferred_email, linkedin_url

def classify_lead(lead):
    content = lead.get("post_content", "").lower()
    pain = lead.get("pain_point", "").lower()
    intent_group = lead.get("intent_group", "Group B")
    
    # 1. Negative Filters (Reject students, job seekers, direct competitors)
    negative_signals = [
        "looking for internship",
        "hiring me",
        "i am an ai developer looking for work",
        "check out my portfolio",
        "how do i learn python",
        "course review",
        "freelancer available"
    ]
    if any(neg in content for neg in negative_signals):
        return None  # Rejected
    
    # 2. Buying Intent vs Just Learning
    is_buying = any(b in content for b in ["looking for", "hire", "need", "budget", "agency", "recommendations", "tired of", "losing"])
    is_founder = any(f in content for f in ["our", "my business", "my agency", "our team", "clients", "leads", "revenue", "founder", "ceo", "saas", "customers"])
    
    # 3. Score calculation (1 - 10)
    score = 6
    if is_buying:
        score += 2
    if is_founder:
        score += 1
    if intent_group == "Group A":
        score += 1
    if any(k in content for k in ["n8n", "hubspot", "crm", "voice agent", "appointment setter"]):
        score = min(10, score + 1)
        
    # Cap between 1 and 10
    score = max(1, min(10, score))
    
    # Strict Quality Filter: Only pass if score >= 7
    if score < 7:
        return None
        
    # Extract specific service needed
    service_needed = "AI Lead Gen & Outreach Automation"
    if "support" in content or "ticket" in content:
        service_needed = "AI Customer Support & Triage Agent"
    elif "appointment" in content or "booking" in content or "calendar" in content:
        service_needed = "AI Appointment Setter & Followup Engine"
    elif "n8n" in content or "make.com" in content or "zapier" in content:
        service_needed = "n8n / Make Workflow Engineering & Integration"
    elif "voice" in content or "phone" in content:
        service_needed = "AI Voice Agent (Inbound/Outbound Telephony)"
        
    company, email, linkedin = infer_company_and_email(lead.get("name", ""), lead.get("post_content", ""), lead.get("platform", ""))
    
    routing_target = "Agent 4 (DM Outreach)" if score >= 8 else "Agent 3 (Comment Reply)"
    
    qualified = {
        "id": lead.get("id"),
        "name": lead.get("name"),
        "company": company,
        "email": email,
        "linkedin": linkedin,
        "platform": lead.get("platform"),
        "profile_url": lead.get("profile_url"),
        "post_url": lead.get("post_url"),
        "post_content": lead.get("post_content"),
        "pain_point": lead.get("pain_point"),
        "service_needed": service_needed,
        "budget_signal": "High ($3k - $10k/mo)" if score >= 9 else "Medium ($1k - $3k/mo)",
        "score": score,
        "buying_signal": "Direct Purchasing Intent" if score >= 8 else "Active Pain Point Seeking Solutions",
        "routing": routing_target,
        "processed_by_closer": False,
        "processed_by_engager": False,
        "qualified_at": datetime.now().isoformat()
    }
    return qualified

def run_qualifier_cycle():
    print(f"\n🧠 [Agent 2: The Qualifier] Starting Intent Classification & Enrichment at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}...")
    raw_leads = load_json(RAW_LEADS_PATH)
    qualified_leads = load_json(QUALIFIED_LEADS_PATH)
    existing_qualified_ids = {q["id"] for q in qualified_leads if "id" in q}
    
    new_qualified = 0
    for raw in raw_leads:
        if raw["id"] in existing_qualified_ids:
            continue
            
        result = classify_lead(raw)
        if result:
            qualified_leads.insert(0, result)
            existing_qualified_ids.add(result["id"])
            new_qualified += 1
            print(f"  ⭐ [QUALIFIED] {result['name']} ({result['company']}) | Score: {result['score']}/10 → {result['routing']}")
        else:
            print(f"  ❌ [REJECTED] {raw.get('name')} | Below quality threshold or competitor.")
            
    save_json(QUALIFIED_LEADS_PATH, qualified_leads)
    print(f"✅ [Agent 2: The Qualifier] Cycle Finished. {new_qualified} new high-value leads qualified. Total Qualified: {len(qualified_leads)}")
    return new_qualified

if __name__ == "__main__":
    run_qualifier_cycle()
