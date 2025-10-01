<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)

watch(isMenuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})
</script>

<template>
  <footer class="footer">
    <div class="containerFooter">
      <div class="footer1">
        <RouterLink to="/">
          <img src="/logoFooter.svg" alt="DigitRise Logo" class="logoFooter" />
        </RouterLink>
        <p class="textoFooter">Automatiza. Acelera. Avanza.</p>
      </div>

      <div class="footer2">
        <h4 class="tituloFooter">Navegación</h4>
        <div>
          <RouterLink to="/" class="nav-link-footer" @click="isMenuOpen = false">Inicio</RouterLink>
          <RouterLink to="/agentes" class="nav-link-footer" @click="isMenuOpen = false">Agentes IA</RouterLink>
          <RouterLink to="/proceso" class="nav-link-footer" @click="isMenuOpen = false">Proceso</RouterLink>
          <RouterLink to="/equipo" class="nav-link-footer" @click="isMenuOpen = false">Equipo</RouterLink>
        </div>
      </div>

      <div class="footer3">
        <h4 class="tituloFooter">Legal</h4>
        <div>
          <RouterLink to="/politica-privacidad" class="nav-link-footer" @click="isMenuOpen = false">Política de privacidad</RouterLink>
          <RouterLink to="/terminos-condiciones" class="nav-link-footer" @click="isMenuOpen = false">Términos y condiciones</RouterLink>
        </div>
      </div>

      <div class="footer4">
        <h4 class="tituloFooter">Síguenos</h4>
        <div>
          <a href="https://www.instagram.com/digitrise/" target="_blank" aria-label="Instagram">
            <img src="/logoIG.png" alt="Logo Instagram" width="80px" class="social-link" />
          </a>
        </div>
      </div>
    </div>

    <div class="rights">
      <p class="textoRights">&copy; {{ new Date().getFullYear() }} DigitRise. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
