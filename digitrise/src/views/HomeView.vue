<script setup>
import PlantillaCard from '../components/PlantillaCard.vue'
</script>

<template>
  <section class="plantillas" id="plantillas">
    <PlantillaCard
      img="/assets/restaurante.jpg"
      titulo="Plantilla Restaurante"
      descripcion="Ideal para menús, reservas y delivery." />
    <PlantillaCard
      img="/assets/peluqueria.jpg"
      titulo="Plantilla Peluquería"
      descripcion="Muestra tus servicios, precios y agenda citas." />
  </section>
</template>
