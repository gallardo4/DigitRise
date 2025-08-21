<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
</script>

<template>
  <div class="layout">
    <Header v-if="!route.meta.hideHeaderFooter" />
    <main>
      <RouterView />
    </main>
    <Footer v-if="!route.meta.hideHeaderFooter" />
  </div>
</template>