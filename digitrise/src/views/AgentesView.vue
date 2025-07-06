<script setup>
import AgenteCard from '../components/AgenteCard.vue'
</script>

<template>
  <section class="agentes grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
    <AgenteCard img="" titulo="Agente 1"
      descripcion="Ideal para menús, reservas y delivery." id="1" />

    <AgenteCard img="" titulo="Agente 2"
      descripcion="Muestra tus servicios, precios y agenda citas." id="2" />
  </section>
</template>
