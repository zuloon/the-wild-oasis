import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zfkumihzgtpxafrirpim.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpma3VtaWh6Z3RweGFmcmlycGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODk4ODQsImV4cCI6MjA5ODU2NTg4NH0.hbGf0p3sf6GpypLidQdCyGLCnWXBIGVgjIPUok11K4s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
