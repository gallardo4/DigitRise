import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import router from './router'
import { supabase } from './supabase' // cliente único

// === Forzar canónico SOLO en producción (no en localhost) ===
if (typeof window !== 'undefined' && !import.meta.env.DEV) {
  const CANONICAL = 'digitrise.net'
  const host = location.hostname
  const isCanonical = host === CANONICAL
  const isProdDomain = host === 'www.digitrise.net' || host === CANONICAL
  if (isProdDomain && !isCanonical) {
    const url = new URL(location.href)
    url.hostname = CANONICAL
    location.replace(url.toString())
  }
}

// === DEBUG: en desarrollo, expón siempre window.supabase y loguea estado ===
if (import.meta.env.DEV) {
  // @ts-expect-error attach for debugging
  window.supabase = supabase
  console.log('[dev] origin:', location.origin)
  supabase.auth.getSession().then(({ data }) => {
    console.log('[dev] initial session?', !!data?.session)
  })
}

const app = createApp(App)
app.use(router).mount('#app')
