-- ==========================================================
-- ACQSA AI - Supabase Email Subscriptions & Leads Schema
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/svoqzmpopkimezlxosjl/sql/new
-- ==========================================================

-- 1. Create newsletter_subscribers table
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website',
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.newsletter_subscribers enable row level security;

-- Policy: Allow visitors to subscribe (INSERT only)
drop policy if exists "Allow anonymous subscribers insertion" on public.newsletter_subscribers;
create policy "Allow anonymous subscribers insertion"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (true);

-- Policy: Service role or dashboard admin can view all subscribers
drop policy if exists "Allow admins to view subscribers" on public.newsletter_subscribers;
create policy "Allow admins to view subscribers"
  on public.newsletter_subscribers
  for select
  to service_role
  using (true);

-- Grant insert permissions to public API roles
grant insert on public.newsletter_subscribers to anon, authenticated;
grant select, insert, update, delete on public.newsletter_subscribers to service_role;


-- 2. Create leads table (for Strategy Call and Pilot inquiries)
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  company text,
  linkedin_url text,
  stage text,
  package_interest text,
  source text default 'strategy_call_modal',
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Policy: Allow visitors to submit lead inquiries (INSERT only)
drop policy if exists "Allow anonymous leads insertion" on public.leads;
create policy "Allow anonymous leads insertion"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- Policy: Service role or dashboard admin can view all leads
drop policy if exists "Allow admins to view leads" on public.leads;
create policy "Allow admins to view leads"
  on public.leads
  for select
  to service_role
  using (true);

-- Grant insert permissions to public API roles
grant insert on public.leads to anon, authenticated;
grant select, insert, update, delete on public.leads to service_role;
