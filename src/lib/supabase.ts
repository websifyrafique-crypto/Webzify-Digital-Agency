import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wemqqlmnuwrjrnigmvbu.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_J7jgF51rP6zKwJZ0qznUUQ_oWDQ6kWL';

export const supabase = createClient(supabaseUrl, supabaseKey);
