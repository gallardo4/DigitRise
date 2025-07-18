<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js'

const router = useRouter()

const isMenuOpen = ref(false)
const user = ref<User | null>(null)

async function checkSession() {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user ?? null
}
checkSession()

supabase.auth.onAuthStateChange((_event, session) => {
  user.value = session?.user ?? null
})

watch(isMenuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

async function signOut() {
  await supabase.auth.signOut()
  user.value = null
  isMenuOpen.value = false
  router.push('/login')
}

onMounted(() => {
  const header = document.querySelector('.header')
  let lastScrollTop = window.scrollY

  const onScroll = () => {
    const currentScroll = window.scrollY
    if (currentScroll > lastScrollTop && currentScroll > 80) {
      header?.classList.add('hide-on-scroll')
    } else {
      header?.classList.remove('hide-on-scroll')
    }
    lastScrollTop = Math.max(currentScroll, 0)
  }

  window.addEventListener('scroll', onScroll)
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
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
        <RouterLink to="/equipo" class="nav-link" @click="isMenuOpen = false">Equipo</RouterLink>
        <RouterLink to="/contacto" class="nav-link" @click="isMenuOpen = false">Contacto</RouterLink>

        <div class="authButtons-mobile" v-if="!user">
          <RouterLink to="/login"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false">Iniciar Sesión</button></RouterLink>
          <RouterLink to="/register"><button class="btnHeaderRegisterPhone" @click="isMenuOpen = false">Registrarse</button></RouterLink>
        </div>

        <div class="authButtons-mobile" v-else>
          <RouterLink to="/perfil"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false">Perfil</button></RouterLink>
          <button class="btnHeaderRegisterPhone" @click="signOut">Cerrar Sesión</button>
        </div>
      </nav>

      <div class="authButtons-desktop" v-if="!user">
        <RouterLink to="/login"><button class="btnHeaderLogin">Iniciar Sesión</button></RouterLink>
        <RouterLink to="/register"><button class="btnHeaderRegister">Registrarse</button></RouterLink>
      </div>

      <div class="authButtons-desktop" v-else>
        <RouterLink to="/perfil"><button class="btnHeaderLogin">Perfil</button></RouterLink>
        <button class="btnHeaderSignout" @click="signOut">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>
