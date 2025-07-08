<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

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

      <!-- Botón hamburguesa -->
      <button
        class="hamburger"
        :class="{ open: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Menú de navegación -->
      <nav class="nav" :class="{ open: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">Inicio</RouterLink>
        <RouterLink to="/agentes" class="nav-link" @click="isMenuOpen = false">Agentes</RouterLink>
        <RouterLink to="/contacto" class="nav-link" @click="isMenuOpen = false">Contacto</RouterLink>
      </nav>
    </div>
  </header>
</template>