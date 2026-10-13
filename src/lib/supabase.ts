import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://svoqzmpopkimezlxosjl.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_YKgY9MefYMWgkpUzwzd2dw_FgAgAsPY';

// Initialize Supabase Client with publishable key
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Adds an email subscriber to the Supabase database.
 * Attempts insertion into `newsletter_subscribers`, falling back to `subscribers`.
 */
export async function addSubscriber(email: string, source: string = 'newsletter') {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const payload = {
    email: cleanEmail,
    source,
    created_at: new Date().toISOString(),
  };

  try {
    // 1. Primary target table: newsletter_subscribers
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([payload])
      .select();

    if (error) {
      // Postgres error code 23505 = unique constraint violation (already subscribed)
      if (error.code === '23505') {
        return { success: true, message: 'You are already subscribed to the dispatch!' };
      }

      // If table does not exist yet (PGRST205), try 'subscribers'
      if (error.code === 'PGRST205') {
        const fallback = await supabase
          .from('subscribers')
          .insert([payload])
          .select();

        if (!fallback.error || fallback.error.code === '23505') {
          return { success: true, message: 'Subscribed successfully!' };
        }
      }

      console.warn('[Supabase Subscription Warning]:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Subscribed successfully!', data };
  } catch (err: any) {
    console.error('[Supabase Subscription Error]:', err);
    return { success: false, error: err.message || 'Subscription failed' };
  }
}

/**
 * Submits strategy call or lead inquiry to Supabase `leads` or `inquiries` table
 */
export async function submitLead(lead: {
  name: string;
  email: string;
  company?: string;
  linkedinUrl?: string;
  stage?: string;
  packageInterest?: string;
  source?: string;
}) {
  const payload = {
    name: lead.name,
    email: lead.email.trim().toLowerCase(),
    company: lead.company || '',
    linkedin_url: lead.linkedinUrl || '',
    stage: lead.stage || '',
    package_interest: lead.packageInterest || '',
    source: lead.source || 'strategy_call_modal',
    created_at: new Date().toISOString(),
  };

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([payload])
      .select();

    if (error) {
      console.warn('[Supabase Lead Submission Warning]:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Lead Submission Error]:', err);
    return { success: false, error: err.message };
  }
}
