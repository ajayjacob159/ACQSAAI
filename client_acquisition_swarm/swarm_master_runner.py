#!/usr/bin/env python3
"""
AI AUTOMATION FOR FOUNDERS — 24/7 CLIENT ACQUISITION SWARM
Master Orchestrator Daemon | Always-On Runtime | Antigravity Engine
"""

import time, sys, os, random
from datetime import datetime

# Import all 6 agents
from hunter import run_hunter_cycle
from multi_platform_hunter import run_omni_hunter_cycle
from qualifier import run_qualifier_cycle
from engager import run_engager_cycle
from closer import run_closer_cycle
from crm import run_crm_cycle
from dashboard import update_swarm_telemetry

def run_full_swarm_cycle(iteration=1):
    print("\n" + "═" * 70)
    print(f"🤖 [24/7 SWARM ORCHESTRATOR] STARTING CYCLE #{iteration} — {datetime.now().strftime('%Y-%m-%d %H:%M:%S IST')}")
    print(f"   Agency: AI Automation for Founders | Owner: Rocky Jacob")
    print("═" * 70)
    
    try:
        # Step 1: Social Listening (Reddit & Specific Channels)
        new_raw_1 = run_hunter_cycle()
        
        # Step 2: Omni-Channel Social Listener (Reddit, Quora, X, LinkedIn, Instagram, FB)
        new_raw_2 = run_omni_hunter_cycle()
        
        # Step 3: Intent Classification & Enrichment (Score 1-10)
        new_qualified = run_qualifier_cycle()
        
        # Step 4: Value Comment Engager (Score 7 Leads)
        new_replies = run_engager_cycle()
        
        # Step 5: High-Intent DM & Email Closer (Score 8-10 Leads)
        new_outreach = run_closer_cycle()
        
        # Step 6: CRM Pipeline Sync & 48h/96h Follow-up Manager
        run_crm_cycle(force_summary=(iteration == 1))
        
        # Step 7: Live Telemetry & Dashboard Sync
        telemetry = update_swarm_telemetry()
        
        print("\n" + "─" * 70)
        print(f"✨ [CYCLE #{iteration} COMPLETE] Summary:")
        print(f"   • Raw Leads Captured: {new_raw_1 + new_raw_2}")
        print(f"   • Qualified Prospects: {new_qualified}")
        print(f"   • Value Comments: {new_replies}")
        active_pipe = telemetry['metrics'].get('active_hospital_crm_pipeline', telemetry['metrics'].get('active_crm_pipeline_size', 0))
        est_arr = telemetry['metrics'].get('estimated_arr_pipeline', telemetry['metrics'].get('estimated_pipeline_value_usd', '₹0'))
        print(f"   • Total Active Pipeline: {active_pipe} hospital prospects ({est_arr})")
        print("─" * 70)
        
    except Exception as e:
        print(f"⚠️ [Swarm Warning] Non-critical error caught during execution: {e}")
        import traceback
        traceback.print_exc()

def start_continuous_daemon(single_run=False):
    iteration = 1
    print(f"🚀 Launching 24/7 Client Acquisition Swarm Daemon...")
    
    while True:
        run_full_swarm_cycle(iteration)
        if single_run:
            break
            
        # Pacing sleep between full sweeps (Anti-ban protection)
        sleep_sec = random.randint(60, 120)
        print(f"\n⏳ Sleeping for {sleep_sec}s until next social listening sweep...")
        time.sleep(sleep_sec)
        iteration += 1

if __name__ == "__main__":
    is_single = "--single" in sys.argv
    start_continuous_daemon(single_run=is_single)
