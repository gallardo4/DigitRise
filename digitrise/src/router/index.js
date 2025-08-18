import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/agentes', name: 'agentes', component: () => import('../views/AgentesView.vue') },
  { path: '/agente/:id', name: 'agenteDetalle', component: () => import('../views/AgenteDetalleView.vue') },
  { path: '/equipo', name: 'equipo', component: () => import('../views/EquipoView.vue') },
  { path: '/proyectos', name: 'proyectos', component: () => import('../views/ProyectosView.vue') },
  { path: '/contacto', name: 'contacto', component: () => import('../views/ContactoView.vue') },

  // Solo invitados
  { path: '/login', name: 'login', component: () => import('../views/LogInView.vue'), meta: { guestOnly: true } },
  { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue'), meta: { guestOnly: true } },

  // Reset password público
  { path: '/reset-password', name: 'resetPassword', component: () => import('../views/ResetPasswordView.vue') },
  { path: '/reset-password-update', name: 'resetPasswordUpdate', component: () => import('../views/ResetPasswordUpdateView.vue') },

  // Protegida
  { path: '/perfil', name: 'perfil', component: () => import('../views/PerfilView.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Espera sesión inicial con timeout, sin promesas cacheadas, y con último intento
function waitForInitialSession(timeoutMs = 3500) {
  return new Promise(async (resolve) => {
    let resolved = false
    const finish = (session) => {
      if (!resolved) {
        resolved = true
        resolve(session ?? null)
      }
    }

    const timer = setTimeout(async () => {
      // Último intento por si la restauración acaba justo al final
      try {
        const { data } = await supabase.auth.getSession()
        return finish(data?.session ?? null)
      } catch {
        return finish(null)
      }
    }, timeoutMs)

    // 1) Intento rápido
    try {
      const { data } = await supabase.auth.getSession()
      if (data?.session) {
        clearTimeout(timer)
        return finish(data.session)
      }
    } catch { /* ignore */ }

    // 2) Esperar eventos
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        clearTimeout(timer)
        subscription.unsubscribe()
        finish(session ?? null)
      }
    })
  })
}

router.beforeEach(async (to) => {
  if (to.meta?.requiresAuth || to.meta?.guestOnly) {
    const session = await waitForInitialSession()
    // console.log('[guard] to:', to.fullPath, 'requiresAuth?', !!to.meta?.requiresAuth, 'guestOnly?', !!to.meta?.guestOnly, 'session?', !!session)

    if (to.meta?.requiresAuth && !session) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
        replace: true,
      }
    }
    if (to.meta?.guestOnly && session) {
      return { path: '/', replace: true }
    }
  }
  return true
})

export default router
