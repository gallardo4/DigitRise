<!-- src/views/AgenteDetalleView.vue -->
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { agentes } from '../assets/data/agentes.js'

const route = useRoute()
const agente = computed(() =>
    agentes.find((a) => a.id === parseInt(route.params.id))
)
</script>

<template>
    <div class="detalle-container" v-if="agente">
        <router-link to="/agentes" class="volver">Volver al catálogo</router-link>

        <h1 class="tituloGrande">{{ agente.nombre }}</h1>
        <img :src="agente.img" :alt="agente.nombre" class="detalle-img" />

        <h2 class="tituloLittle">{{ agente.titulo }}</h2>
        <p class="texto">{{ agente.descripcion }}</p>

        <ul class="info-detalle">
            <li class="texto"><strong>Negocio ideal:</strong> {{ agente.negocioIdeal }}</li>
            <li class="texto"><strong>Usabilidad:</strong> {{ agente.usabilidad }}</li>
            <li class="texto"><strong>Dificultad:</strong> {{ agente.dificultad }}</li>
        </ul>

        <div>
            <h4 class="texto"><strong>Ventajas:</strong></h4>
            <ul>
                <li class="texto" v-for="(v, i) in agente.ventajas" :key="i">{{ v }}</li>
            </ul>
        </div>
    </div>

    <div v-else>
        <p>Agente no encontrado.</p>
        <router-link to="/agentes" class="volver">Volver al catálogo</router-link>
    </div>
</template>
