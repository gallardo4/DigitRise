<script setup lang="ts">
const proyectos = [
    {
        nombre: 'Restaurante Casa Mía',
        descripcion: 'Juan, dueño de un restaurante, ya no pierde tiempo gestionando reservas. Su Agente IA lo hace 24/7 por WhatsApp.',
        resultados: 'Aumento del 43% en reservas online en 3 meses.',
        imagen: '/proyectos/casamia.jpg',
    },
    {
        nombre: 'Tienda UrbanClothes',
        descripcion: 'Creamos su ecommerce completo con pasarela de pago y chatbot IA.',
        resultados: 'Reducción del 70% en dudas frecuentes y +120 pedidos/mes.',
        imagen: '/proyectos/urbanclothes.jpg',
    },
]
</script>

<template>
    <section class="proyectos">
        <h1 class="tituloGrande">Proyectos destacados</h1>
        <p class="texto">Soluciones reales para negocios reales.</p>

        <div class="lista-proyectos">
            <div v-for="proyecto in proyectos" :key="proyecto.nombre" class="proyecto">
                <img :src="proyecto.imagen" :alt="proyecto.nombre" />
                <h2 class="tituloLittle">{{ proyecto.nombre }}</h2>
                <p class="texto">{{ proyecto.descripcion }}</p>
                <p class="texto">
                    <strong>{{ proyecto.resultados }}</strong>
                </p>
            </div>
        </div>
    </section>
</template>
