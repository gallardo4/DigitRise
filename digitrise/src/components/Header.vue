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
      <RouterLink to="/"><img src="/logoGrandeHeader.svg" alt="DigitRise Logo" class="logoHeader" /></RouterLink>

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
      </nav>
      
      <RouterLink to="/contacto"><button class="btnContact" onclick="this.blur()">Contáctanos</button></RouterLink>
    </div>
  </header>
</template>
