<script setup lang="ts">
const team = [
  {
    nombre: 'Alex Martín',
    rol: 'Estrategia Digital',
    frase: '"Creamos DigitRise para impulsar a marcas con visión, usando la tecnología como aliada."',
    imagen: '/imgEquipo/fotoAlex.jpeg',
  },
  {
    nombre: 'Arnau Gallardo',
    rol: 'Desarrollo Web, IA y Automatización',
    frase: '"Creemos que la inteligencia artificial no reemplaza personas: potencia su creatividad y resultados."',
    imagen: '/imgEquipo/fotoGallardo.jpg',
  },
]
</script>

<template>
    <section class="equipo">
        <h1 class="tituloGrande">Conoce al <span class="textoColor">equipo</span></h1>

        <p class="texto">
            Somos <strong>Alex</strong> y <strong>Arnau</strong>, cofundadores de <strong>DigitRise</strong>.
            Iniciamos este proyecto con la convicción de que la <strong>inteligencia artificial</strong> y la <strong>automatización</strong>
            deben estar al servicio de las ideas con visión y los negocios con propósito.
            Con una mentalidad innovadora y una visión fresca, apostamos por un enfoque estratégico para hacer que lo digital genere verdadero impacto.
        </p>

        <div class="miembros">
            <div v-for="persona in team" :key="persona.nombre" class="miembro">
                <img :src="persona.imagen" :alt="persona.nombre" class="foto" />
                <h3 class="tituloGrande"><span class="textoColor">{{ persona.nombre }}</span></h3>
                <p class="texto"><strong>{{ persona.rol }}</strong></p>
                <blockquote class="texto">{{ persona.frase }}</blockquote>
            </div>
        </div>
    </section>
</template>
