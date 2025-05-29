<!-- views/PlantillasView.vue -->
<script setup>
import PlantillaCard from '../components/PlantillaCard.vue'
</script>

<!-- views/PlantillasView.vue -->
<template>
  <section class="plantillas grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
    <PlantillaCard img="/assets/restaurante.jpg" titulo="Plantilla Restaurante"
      descripcion="Ideal para menús, reservas y delivery." id="restaurante" />

    <PlantillaCard img="/assets/peluqueria.jpg" titulo="Plantilla Peluquería"
      descripcion="Muestra tus servicios, precios y agenda citas." id="peluqueria" />
  </section>
</template>
