<script setup lang="ts">
defineProps({
  img: String,
  titulo: String,
  descripcion: String
})
</script>

<template>
  <div class="plantilla-card">
    <img :src="img" :alt="titulo" />
    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
  </div>
</template>