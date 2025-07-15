import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gkbcishwenpeezhefoal.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYmNpc2h3ZW5wZWV6aGVmb2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTY2MTAsImV4cCI6MjA2ODA5MjYxMH0.vjR-r3shKJPWhh8_vmFtZgHh7pSklBnHS27nFrEflJ4'

export const supabase = createClient(supabaseUrl, supabaseKey)