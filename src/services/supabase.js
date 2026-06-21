import { createClient } from "@supabase/supabase-js";

// Hapus "/rest/v1/" di ujung URL ini!
const supabaseUrl = "https://otiamcsbmrplqznmkpca.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aWFtY3NibXJwbHF6bm1rcGNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MjAwNzA1MiwiZXhwIjoyMDk3NTgzMDUyfQ.-mN8ZOAq2T10Y5nBvmL_pzeOtOIHcxVsrGdxduVJTNM";

export const supabase = createClient(supabaseUrl, supabaseKey);