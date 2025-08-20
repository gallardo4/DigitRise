<template>
  <footer class="footer">
    <div class="containerFooter">
      <div class="footer-spacer"></div>

      <div class="footer-main">
        <RouterLink to="/">
          <img src="/logoFooter.svg" alt="DigitRise Logo" class="logoFooter" />
        </RouterLink>
        <p class="texto">&copy; {{ new Date().getFullYear() }} DigitRise. Todos los derechos reservados.</p>
      </div>

      <a href="https://www.instagram.com/digitrise/" target="_blank" aria-label="Instagram" class="social-link">
        <img src="/logoIG.png" alt="Logo Instagram" width="80px" />
      </a>
    </div>
  </footer>
</template>
