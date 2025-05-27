<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="layout">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>