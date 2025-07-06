<script setup lang="ts">
defineProps({
  img: String,
  titulo: String,
  descripcion: String,
  id: String
})
</script>

<template>
  <router-link :to="`/agentes/${id}`" class="agentes-card block hover:shadow-lg">
    <img :src="img" :alt="titulo" class="w-full h-48 object-cover" />
    <div class="p-4 bg-white">
      <h3 class="text-xl font-bold">{{ titulo }}</h3>
      <p class="text-gray-600">{{ descripcion }}</p>
    </div>
  </router-link>
</template>
