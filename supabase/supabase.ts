// supabase.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_PUBLIC_KEY = 'your-public-api-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
