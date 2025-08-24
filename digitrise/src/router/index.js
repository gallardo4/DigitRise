import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/agentes', name: 'agentes', component: () => import('../views/AgentesView.vue') },
  { path: '/agente/:id', name: 'agenteDetalle', component: () => import('../views/AgenteDetalleView.vue') },
  { path: '/equipo', name: 'equipo', component: () => import('../views/EquipoView.vue') },
  { path: '/proceso', name: 'proceso', component: () => import('../views/ProcesoView.vue') },
  { path: '/politica-privacidad', name: 'politica-privacidad', component: () => import('../views/PoliticaView.vue'), meta: { hideHeaderFooter: true } },
  { path: '/terminos-condiciones', name: 'terminos-condiciones', component: () => import('../views/TerminosView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
