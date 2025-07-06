import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/agentes',
      name: 'agentes',
      component: () => import('../views/AgentesView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
    },
    {
      path: '/plantillas/:id',
      name: 'plantilla-dinamica',
      component: () => import('../views/plantillas/PlantillaBase.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
