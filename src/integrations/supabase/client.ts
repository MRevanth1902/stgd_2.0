// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sfffnjjozmkmugdchhaq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZmZuampvem1rbXVnZGNoaGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzI2NzcsImV4cCI6MjA2NDUwODY3N30.bdG4nGps8LaQZ0ILXv-lMHPU1GwoJ6B-0pD_qsvLaQ4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);