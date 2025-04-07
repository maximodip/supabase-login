import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hlrpnutrgdxrkwflmwkg.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscnBudXRyZ2R4cmt3Zmxtd2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NzkwNTYsImV4cCI6MjA1OTU1NTA1Nn0.JN0W5AYWdyjkvhlsvzoBF1L8raNGVGor31UvCUwgf4A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const handleOAuth = async (provider: 'google' | 'github') => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://localhost:5173/dashboard',
    },
  })

  if (error) throw error
}
