<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

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
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/agentes" class="nav-link">Agentes</RouterLink>
        <RouterLink to="/contacto" class="nav-link">Contacto</RouterLink>
      </nav>
      <a href="https://www.instagram.com/digitrise/" target="_blank" aria-label="Instagram" class="social-link">Instagram</a>
    </div>
  </header>
</template>