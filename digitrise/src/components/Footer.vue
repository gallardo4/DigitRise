<template>
  <footer class="footer">
    <div class="containerFooter">
      <RouterLink to="/"><img src="/logo.svg" alt="DigitRise Logo" class="logoFooter" /></RouterLink>
      <p>&copy; {{ new Date().getFullYear() }} DigitRise. Todos los derechos reservados.</p>
      <nav class="footer-nav">
        <a href="#" aria-label="Facebook" class="social-link">Facebook</a>
        <a href="#" aria-label="Twitter" class="social-link">Twitter</a>
        <a href="#" aria-label="Instagram" class="social-link">Instagram</a>
      </nav>
    </div>
  </footer>
</template>