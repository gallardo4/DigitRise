<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const plantillaId = route.params.id

// Aquí podrías cargar los datos según el ID
// por ahora solo simulamos un render básico
</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold">Plantilla: {{ plantillaId }}</h1>
        <p>Aquí puedes construir la vista para la plantilla <strong>{{ plantillaId }}</strong>.</p>
    </div>
</template>
