import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import router from './router'

// Forzar dominio canónico SOLO en producción (opcional; mantengo tu lógica)
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

const app = createApp(App)
app.use(router).mount('#app')
