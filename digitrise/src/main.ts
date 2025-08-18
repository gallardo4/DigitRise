import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import router from './router'
import { supabase } from './supabase' // cliente único

// === 1) Fuerza dominio canónico SOLO en producción ===
// - No redirige en localhost/127.0.0.1
// - No redirige en dominios de preview (vercel.app, etc.)
// - Sí redirige de www.digitrise.net -> digitrise.net
if (typeof window !== 'undefined' && !import.meta.env.DEV) {
  const CANONICAL = 'digitrise.net'
  const host = location.hostname

  const isLocal =
    host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0'
  const isCanonical = host === CANONICAL
  const isProdDomain = host === 'www.digitrise.net' || host === CANONICAL

  if (!isLocal && isProdDomain && !isCanonical) {
    const url = new URL(location.href)
    url.hostname = CANONICAL
    location.replace(url.toString())
  }
}

// === 2) Modo DEBUG también en producción con ?debug=1 ===
const DEBUG =
  typeof window !== 'undefined' &&
  (import.meta.env.DEV || new URLSearchParams(location.search).has('debug'))

const app = createApp(App)
app.use(router).mount('#app')

// === 3) Exponer supabase a la consola cuando DEBUG esté activo ===
if (DEBUG) {
  // @ts-expect-error attach for debugging
  window.supabase = supabase
  console.log('[debug] origin:', location.origin)
}
