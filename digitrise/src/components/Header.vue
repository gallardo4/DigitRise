<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)

watch(isMenuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="containerHeader">
      <RouterLink to="/">
        <img src="/logoGrandeHeader.svg" alt="DigitRise Logo" class="logoHeader" />
      </RouterLink>

      <!-- Hamburguesa (solo móvil) -->
      <button
        class="hamburger"
        :class="{ open: isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="main-nav"
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navegación -->
      <nav id="main-nav" class="nav" :class="{ open: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">Inicio</RouterLink>
        <RouterLink to="/agentes" class="nav-link" @click="isMenuOpen = false">Agentes IA</RouterLink>
        <RouterLink to="/proceso" class="nav-link" @click="isMenuOpen = false">Proceso</RouterLink>
        <RouterLink to="/equipo" class="nav-link" @click="isMenuOpen = false">Equipo</RouterLink>
      </nav>

      <!-- Botón de contacto (oculto en móvil) -->
      <a href="https://calendly.com/info-digitrise/30min" target="_blank">
        <button class="btnContact" onclick="this.blur()">Contáctanos</button>
      </a>
    </div>
  </header>
</template>
