<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js'

const router = useRouter()

const isMenuOpen = ref(false)
const user = ref<User | null>(null)
let authUnsub: (() => void) | null = null

onMounted(async () => {
  // Suscríbete primero para capturar INITIAL_SESSION
  const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
    // console.log('[header] auth event:', event, !!session)
    if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
      user.value = session?.user ?? null
    } else if (event === 'SIGNED_OUT') {
      user.value = null
      router.replace('/login')
    }
  })
  authUnsub = () => listener.subscription.unsubscribe()

  // Estado inicial por si ya está disponible sin esperar al evento
  const { data, error } = await supabase.auth.getSession()
  if (error) console.error('getSession error:', error.message)
  if (data.session) {
    user.value = data.session.user
  }
})

onBeforeUnmount(() => {
  authUnsub?.()
})

watch(isMenuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    // Normalmente llegará SIGNED_OUT y el listener hará router.replace('/login')
    // Pero por si acaso, forzamos navegación si en ~1s no ha pasado nada.
    setTimeout(() => {
      if (user.value) return // el listener ya actualizó user -> no forzar
      router.replace('/login')
    }, 1000)
  } catch (e: any) {
    console.error('Error al cerrar sesión:', e?.message ?? e)
    // fallback duro si signOut falla
    router.replace('/login')
  } finally {
    user.value = null
    isMenuOpen.value = false
  }
}
</script>

<template>
  <header class="header">
    <div class="containerHeader">
      <RouterLink to="/"><img src="/logoGrande.svg" alt="DigitRise Logo" class="logoHeader" /></RouterLink>

      <button class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ open: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">Inicio</RouterLink>
        <RouterLink to="/agentes" class="nav-link" @click="isMenuOpen = false">Agentes IA</RouterLink>
        <RouterLink to="/proyectos" class="nav-link" @click="isMenuOpen = false">Proyectos</RouterLink>
        <RouterLink to="/equipo" class="nav-link" @click="isMenuOpen = false">Equipo</RouterLink>
        <RouterLink to="/contacto" class="nav-link" @click="isMenuOpen = false">Contacto</RouterLink>

        <div class="authButtons-mobile" v-if="!user">
          <RouterLink to="/login"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
          <RouterLink to="/register"><button class="btnHeaderRegisterPhone" @click="isMenuOpen = false" onclick="this.blur()">Registrarse</button></RouterLink>
        </div>

        <div class="authButtons-mobile" v-else>
          <RouterLink to="/perfil"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false" onclick="this.blur()">Perfil</button></RouterLink>
          <button class="btnHeaderRegisterPhone" @click="signOut" onclick="this.blur()">Cerrar Sesión</button>
        </div>
      </nav>

      <div class="authButtons-desktop" v-if="!user">
        <RouterLink to="/login"><button class="btnHeaderLogin" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
        <RouterLink to="/register"><button class="btnHeaderRegister" onclick="this.blur()">Registrarse</button></RouterLink>
      </div>

      <div class="authButtons-desktop" v-else>
        <RouterLink to="/perfil"><button class="btnHeaderLogin" onclick="this.blur()">Perfil</button></RouterLink>
        <button class="btnHeaderSignout" @click="signOut" onclick="this.blur()">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>
