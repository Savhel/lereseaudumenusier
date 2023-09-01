import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iisqmbwofnmgwflqxsie.supabase.co";

const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpc3FtYndvZm5tZ3dmbHF4c2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MTk0MzIsImV4cCI6MjAwODM5NTQzMn0.4HmZbiavXdgZRQUwmgZVeIvsW22BlGcqPpAiol4nVDI";

export const supabase = createClient(supabaseUrl, supabaseAnonkey);