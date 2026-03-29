import { createClient } from "@supabase/supabase-js";

// Check if ENV vars exist. If they don't, provide dummy empty ones
// so the app builds without crashing until the user configures their project.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://moczgraegouibamqgwbc.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_w8aWRUMR69KxZS5IatVyjw_h-w7nfQs";

/**
 * Single, initialized Supabase client for all frontend API calls.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
