<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

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

onMounted(() => {
  const header = document.querySelector('.header')
  let lastScrollTop = window.scrollY

  const onScroll = () => {
    const currentScroll = window.scrollY

    if (currentScroll > lastScrollTop && currentScroll > 80) {
      header?.classList.add('hide-on-scroll') // scroll abajo
    } else {
      header?.classList.remove('hide-on-scroll') // scroll arriba
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

        <!-- authButtons SOLO en móvil -->
        <div class="authButtons-mobile">
          <RouterLink to="/login"><button class="btnHeaderLoginPhone" @click="isMenuOpen = false" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
          <RouterLink to="/register"><button class="btnHeaderRegisterPhone" @click="isMenuOpen = false" onclick="this.blur()">Registrarse</button></RouterLink>
        </div>
      </nav>

      <!-- authButtons SOLO en desktop -->
      <div class="authButtons-desktop">
        <RouterLink to="/login"><button class="btnHeaderLogin" onclick="this.blur()">Iniciar Sesión</button></RouterLink>
        <RouterLink to="/register"><button class="btnHeaderRegister" onclick="this.blur()">Registrarse</button></RouterLink>
      </div>
    </div>
  </header>
</template>