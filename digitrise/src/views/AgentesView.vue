<!-- src/views/AgentesView.vue -->
<script setup>
import { agentes } from '../assets/data/agentes.js'
</script>

<template>
  <section class="agentes-container">
    <h1 class="tituloGrande">Conoce a nuestros agentes</h1>

    <div class="grid-agentes">
      <router-link v-for="agente in agentes" :key="agente.id" :to="`/agente/${agente.id}`" class="agente-card">
        <div class="cuadrado">
          <img :src="agente.img" :alt="agente.nombre" class="agente-img" />
          <h2 class="tituloLittle">{{ agente.nombre }}</h2>
        </div>
      </router-link>
    </div>
  </section>
</template>
