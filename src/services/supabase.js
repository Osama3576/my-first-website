import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://edoqfgcdbafyjyoepeva.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkb3FmZ2NkYmFmeWp5b2VwZXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NDI5MzUsImV4cCI6MjAwNDAxODkzNX0.4b-Co5qCzdC4qgIYYXf2e8h32PSq3A_aDsR7pvG1Q90';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
// rawal9595
// oshahbaz74
