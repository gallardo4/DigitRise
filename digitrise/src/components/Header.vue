<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js' // Importa el tipo User de supabase-js

const isMenuOpen = ref(false)
const user = ref<User | null>(null)  // aquí indicamos que puede ser User o null

// Detectar estado inicial de sesión
async function checkSession() {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user ?? null
}
checkSession()

// Escuchar cambios de sesión
supabase.auth.onAuthStateChange((_event, session) => {
  user.value = session?.user ?? null
})

watch(isMenuOpen, (open) => {
  if (open) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

async function signOut() {
  await supabase.auth.signOut()
  user.value = null
  isMenuOpen.value = false
}

onMounted(() => {
  const header = document.querySelector('.header')
  let lastScrollTop = window.scrollY

  const onScroll = () => {
    const currentScroll = window.scrollY

    if (currentScroll > lastScrollTop && currentScroll > 80) {
      header?.classList.add('hide-on-scroll') // scroll down
    } else {
      header?.classList.remove('hide-on-scroll') // scroll up
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
  }

  window.addEventListener('scroll', onScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
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
          <RouterLink to="/login"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
          <RouterLink to="/register"><button class="btnHeaderRegisterPhone" @click="isMenuOpen = false" onclick="this.blur()">Registrarse</button></RouterLink>
        </div>

        <div class="authButtons-mobile" v-else>
          <button class="btnHeaderRegisterPhone" @click="signOut" onclick="this.blur()">Cerrar Sesión</button>
        </div>
      </nav>

      <div class="authButtons-desktop" v-if="!user">
        <RouterLink to="/login"><button class="btnHeaderLogin" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
        <RouterLink to="/register"><button class="btnHeaderRegister" onclick="this.blur()">Registrarse</button></RouterLink>
      </div>

      <div class="authButtons-desktop" v-else>
        <button class="btnHeaderSignout" @click="signOut" onclick="this.blur()">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>
