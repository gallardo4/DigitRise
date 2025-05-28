<template>
  <footer class="footer">
    <div class="containerFooter">
      <RouterLink to="/"><img src="/logo.svg" alt="DigitRise Logo" class="logoFooter" /></RouterLink>
      <p>&copy; {{ new Date().getFullYear() }} DigitRise. Todos los derechos reservados.</p>
      <nav class="footer-nav">
        <a href="#" target="_blank" aria-label="Facebook" class="social-link">Facebook</a>
        <a href="#" target="_blank" aria-label="Twitter" class="social-link">Twitter</a>
        <a href="https://www.instagram.com/digitrise/" target="_blank" aria-label="Instagram" class="social-link">Instagram</a>
      </nav>
    </div>
  </footer>
</template>