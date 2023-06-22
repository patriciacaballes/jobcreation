import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const projectKey = import.meta.env.VITE_SUPABASE_PROJECT_KEY;

export const supabase = createClient("https://tenrrdtgmcymxycvcyio.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbnJyZHRnbWN5bXh5Y3ZjeWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NzkwMzEsImV4cCI6MjAwMjE1NTAzMX0.xMPZ33h5ubgsHObGKjqtbr7-CZuLvXC8AiXDRc96vEg");
