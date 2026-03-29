import { createClient } from "@supabase/supabase-js";

// Check if ENV vars exist. If they don't, provide dummy empty ones
// so the app builds without crashing until the user configures their project.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://dummy-url.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "dummy-anon-key";

/**
 * Single, initialized Supabase client for all frontend API calls.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
