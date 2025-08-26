<script setup>
import { agentes } from '../assets/data/agentes.js'
</script>

<template>
  <section class="agentes-container">
    <h1 class="tituloGrande">Conoce a nuestros <span class="textoColor">agentes</span></h1>

    <div class="grid-agentes">
      <router-link v-for="agente in agentes" :key="agente.id" :to="`/agentes/${agente.nombreUrl}`" class="agente-card">
        <img :src="agente.img" :alt="agente.nombre" />
        <h2 class="tituloGrande">{{ agente.nombre }}</h2>
        <p class="texto">{{ agente.titulo }}</p>
      </router-link>
    </div>
  </section>
</template>
