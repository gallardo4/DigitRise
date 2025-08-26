<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { agentes } from '../assets/data/agentes.js'

const route = useRoute()
const agente = computed(() =>
    agentes.find((a) => a.nombreUrl === route.params.nombreUrl)
)
</script>

<template>
    <div class="detalle-container" v-if="agente">
        <router-link to="/agentes" class="volver">Volver al catálogo</router-link>

        <h1 class="tituloGrande"><span class="textoColor">{{ agente.nombre }}</span></h1>
        <img :src="agente.img" :alt="agente.nombre" class="detalle-img" />

        <h2 class="tituloGrande">{{ agente.titulo }}</h2>
        <p class="texto">{{ agente.descripcion }}</p>
    </div>

    <div v-else>
        <p>Agente no encontrado.</p>
        <router-link to="/agentes" class="volver">Volver al catálogo</router-link>
    </div>
</template>
