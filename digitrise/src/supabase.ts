import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gkbcishwenpeezhefoal.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYmNpc2h3ZW5wZWV6aGVmb2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTY2MTAsImV4cCI6MjA2ODA5MjYxMH0.vjR-r3shKJPWhh8_vmFtZgHh7pSklBnHS27nFrEflJ4'

// DEBUG también aquí (para logs iniciales)
const DEBUG =
  typeof window !== 'undefined' &&
  (import.meta.env.DEV || new URLSearchParams(location.search).has('debug'))

// Cliente único con auth persistente
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// Log de sesión inicial (útil para comprobar si ya hay sesión)
if (DEBUG) {
  supabase.auth.getSession().then(({ data, error }) => {
    if (error) console.warn('[auth] getSession error:', error.message)
    console.log('[auth] initial session?', !!data.session)
  })
}

/**
 * Listener de auth único (evita duplicados con HMR) y
 * asegura la fila del usuario en public.users mediante UPSERT.
 */
function attachAuthListener() {
  return supabase.auth.onAuthStateChange(async (event, session) => {
    if (DEBUG) {
      console.log('[auth] event:', event, 'session?', !!session)
    }

    if (event === 'SIGNED_IN' && session?.user) {
      const u = session.user
      const { error } = await supabase
        .from('users')
        .upsert(
          {
            id: u.id,
            name: u.user_metadata?.name ?? '',
            email: u.email,
            last_login: new Date().toISOString(),
          },
          { onConflict: 'id' }
        )

      if (error) {
        console.error('Error guardando perfil:', error.message)
      } else if (DEBUG) {
        console.info('Perfil asegurado/actualizado tras SIGNED_IN')
      }
    }
  })
}

// Asegura un único listener en navegador (y limpia en HMR)
let __unsub: (() => void) | null = null

function ensureSingleAuthListener() {
  if (typeof window === 'undefined') return

  // Si había uno previo (p. ej., por HMR), desuscribirlo
  // @ts-expect-error guard for previous listener
  if (window.__supabaseAuthUnsub) {
    // @ts-expect-error call previous unsub
    window.__supabaseAuthUnsub()
  }

  const {
    data: { subscription },
  } = attachAuthListener()
  __unsub = () => subscription.unsubscribe()

  // Guardar el unsub globalmente para el próximo HMR
  // @ts-expect-error store unsub for HMR
  window.__supabaseAuthUnsub = __unsub
}

ensureSingleAuthListener()

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    __unsub?.()
  })
}
