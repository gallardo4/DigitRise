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
      path: '/agente/:id',
      name: 'agenteDetalle',
      component: () => import('../views/AgenteDetalleView.vue'),
    },
    {
      path: '/equipo',
      name: 'equipo',
      component: () => import('../views/EquipoView.vue'),
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('../views/ProyectosView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
    },
    /*  
    {
      path: '/selector',
      name: 'selector',
      component: () => import('../views/SelectorView.vue'),
    },
    */
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue'),
    },
      {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import('../views/ResetPasswordView.vue'),
    },
    {
      path: '/reset-password-update',
      name: 'resetPasswordUpdate',
      component: () => import('../views/ResetPasswordUpdateView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
