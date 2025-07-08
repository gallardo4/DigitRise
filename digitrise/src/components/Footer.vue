<template>
  <footer class="footer">
    <div class="containerFooter">
      <div>
        <RouterLink to="/">
          <img src="/logo.svg" alt="DigitRise Logo" class="logoFooter" />
        </RouterLink>
        <p>&copy; {{ new Date().getFullYear() }} DigitRise. Todos los derechos reservados.</p>
      </div>
      <a href="https://www.instagram.com/digitrise/" target="_blank" aria-label="Instagram" class="social-link">Instagram</a>
    </div>
  </footer>
</template>
