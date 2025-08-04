import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gkbcishwenpeezhefoal.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYmNpc2h3ZW5wZWV6aGVmb2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTY2MTAsImV4cCI6MjA2ODA5MjYxMH0.vjR-r3shKJPWhh8_vmFtZgHh7pSklBnHS27nFrEflJ4'

export const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN' && session?.user) {
    const user = session.user

    // Verifica si el usuario ya existe
    const { data: existingUser, error: selectError } = await supabase
      .from('users')
      .select('id')
      .eq('id', user.id)
      .single()

    if (selectError && selectError.code !== 'PGRST116') {
      console.error('Error verificando usuario:', selectError.message)
      return
    }

    // Inserta el perfil si no existe
    if (!existingUser) {
      const { error: insertError } = await supabase.from('users').insert({
        id: user.id,
        name: user.user_metadata?.name ?? '',
        email: user.email,
        last_login: new Date().toISOString(),
      })

      if (insertError) {
        console.error('Error al insertar perfil:', insertError.message)
      } else {
        console.info('Perfil insertado automáticamente tras confirmación de email')
      }
    }
  }
})