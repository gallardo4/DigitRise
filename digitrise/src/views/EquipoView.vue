<script setup lang="ts">
// Aquí podrías importar el equipo desde un archivo JSON o composable si lo deseas
const team = [
    {
        nombre: 'Alex Martin Cobo',
        rol: 'Estrategia Digital',
        frase: 'La innovación empieza con una buena idea ejecutada con pasión.',
        imagen: '/fotos/alex.jpg',
    },
    {
        nombre: 'Arnau Gallardo',
        rol: 'Desarrollo Web',
        frase: 'Cada línea de código es una oportunidad para mejorar el mundo.',
        imagen: '/fotos/arnau.jpg',
    },
    {
        nombre: 'Daniel Sobrino',
        rol: 'IA y Automatización',
        frase: 'La IA no reemplaza personas, potencia su creatividad.',
        imagen: '/fotos/daniel.jpg',
    },
]
</script>

<template>
    <section class="equipo">
        <h1>Conoce al equipo</h1>
        <p>Somos los fundadores de Digit Rise y esta es nuestra misión.</p>

        <div class="miembros">
            <div v-for="persona in team" :key="persona.nombre" class="miembro">
                <img :src="persona.imagen" :alt="persona.nombre" class="foto" />
                <h3>{{ persona.nombre }}</h3>
                <p class="rol">{{ persona.rol }}</p>
                <blockquote>{{ persona.frase }}</blockquote>
            </div>
        </div>
    </section>
</template>

<style scoped>
.equipo {
    padding: 2rem;
    text-align: center;
}

.miembros {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.miembro {
    max-width: 250px;
}

.foto {
    width: 100%;
    border-radius: 1rem;
}

.rol {
    font-weight: bold;
    color: #555;
}
</style>
