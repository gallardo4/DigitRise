<script setup lang="ts">
// Aquí podrías importar el equipo desde un archivo JSON o composable si lo deseas
const team = [
    {
        nombre: 'Alex Martín',
        rol: 'Estrategia Digital',
        frase: 'La innovación empieza con una buena idea ejecutada con pasión.',
        imagen: '',
    },
    {
        nombre: 'Arnau Gallardo',
        rol: 'Desarrollo Web, IA y Automatización',
        frase: 'Cada línea de código es una oportunidad para mejorar el mundo. La IA no reemplaza personas, potencia su creatividad.',
        imagen: '/imgEquipo/fotoGallardo.jpg',
    },
]
</script>

<template>
    <section class="equipo">
        <h1 class="tituloGrande">Conoce al equipo</h1>

        <p class="texto">Somos los fundadores de <strong>DigitRise</strong> y esta es nuestra misión.</p>

        <div class="miembros">
            <div v-for="persona in team" :key="persona.nombre" class="miembro">
                <img :src="persona.imagen" :alt="persona.nombre" class="foto" />
                <h3 class="tituloLittle">{{ persona.nombre }}</h3>
                <p class="texto"><strong>{{ persona.rol }}</strong></p>
                <blockquote class="texto">{{ persona.frase }}</blockquote>
            </div>
        </div>
    </section>
</template>
