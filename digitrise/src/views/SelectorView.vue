<script setup lang="ts">
import { ref } from 'vue'

const tipoAgente = ref('')
const canal = ref('')
const funciones = ref<string[]>([])
const tono = ref('')
</script>

<template>
    <section class="selector">
        <h1>Diseña tu Agente IA</h1>
        <p>Responde unas preguntas rápidas y te ayudamos a crear tu IA ideal.</p>

        <form class="formulario">
            <label>¿Qué tipo de agente necesitas?</label>
            <select v-model="tipoAgente">
                <option>Chat de atención</option>
                <option>Asistente de contenido</option>
                <option>Analista de datos</option>
                <option>Automatizador de procesos</option>
                <option>Otro</option>
            </select>

            <label>¿Dónde se usará?</label>
            <select v-model="canal">
                <option>Web</option>
                <option>WhatsApp</option>
                <option>Email</option>
                <option>Sistema interno</option>
            </select>

            <label>Funciones clave:</label>
            <div class="checklist">
                <label><input type="checkbox" value="Responde preguntas" v-model="funciones" /> Responde
                    preguntas</label>
                <label><input type="checkbox" value="Genera contenido" v-model="funciones" /> Genera contenido</label>
                <label><input type="checkbox" value="Extrae info de base de datos" v-model="funciones" /> Extrae
                    info</label>
                <label><input type="checkbox" value="Automatiza tareas" v-model="funciones" /> Automatiza tareas</label>
            </div>

            <label>Tono de la IA:</label>
            <select v-model="tono">
                <option>Formal</option>
                <option>Cercano</option>
                <option>Técnico</option>
                <option>Divertido</option>
            </select>

            <RouterLink :to="{
                path: '/contacto',
                query: {
                    tipoAgente,
                    canal,
                    funciones: funciones.join(','),
                    tono
                }
            }" class="boton-enviar">
                🎯 Quiero este agente
            </RouterLink>
        </form>
    </section>
</template>

<style scoped>
.selector {
    padding: 2rem;
    max-width: 600px;
    margin: auto;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.checklist label {
    display: block;
}

.boton-enviar {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #0d6efd;
    color: white;
    border-radius: 0.5rem;
    text-align: center;
    text-decoration: none;
}
</style>
