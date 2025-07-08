<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>