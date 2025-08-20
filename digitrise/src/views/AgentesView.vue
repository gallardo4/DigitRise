<script setup>
import { agentes } from '../assets/data/agentes.js'
</script>

<template>
  <section class="agentes-container">
    <h1 class="tituloGrande">Conoce a nuestros <span class="textoColor">agentes</span></h1>

    <div class="grid-agentes">
      <router-link v-for="agente in agentes" :key="agente.id" :to="`/agente/${agente.id}`" class="agente-card">
        <img :src="agente.img" :alt="agente.nombre" />
        <h2 class="tituloGrande">{{ agente.nombre }}</h2>
      </router-link>
    </div>
  </section>
</template>
