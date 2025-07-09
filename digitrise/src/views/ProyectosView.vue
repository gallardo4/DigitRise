<script setup lang="ts">
const proyectos = [
    {
        nombre: 'Restaurante Casa Mía',
        descripcion: 'Transformamos su presencia online con una web moderna y reservas automáticas.',
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
        <h1>Proyectos destacados</h1>
        <p>Soluciones reales para negocios reales.</p>

        <div class="lista-proyectos">
            <div v-for="proyecto in proyectos" :key="proyecto.nombre" class="proyecto">
                <img :src="proyecto.imagen" :alt="proyecto.nombre" />
                <h2>{{ proyecto.nombre }}</h2>
                <p>{{ proyecto.descripcion }}</p>
                <strong>{{ proyecto.resultados }}</strong>
            </div>
        </div>
    </section>
</template>

<style scoped>
.proyectos {
    padding: 2rem;
}

.lista-proyectos {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.proyecto {
    max-width: 300px;
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.proyecto img {
    width: 100%;
    border-radius: 0.5rem;
}
</style>
