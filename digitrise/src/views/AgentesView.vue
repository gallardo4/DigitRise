<script setup>
import { ref } from 'vue'

// Importar imágenes desde assets
const agentes = [
  {
    id: 1,
    nombre: 'Agente Secretario',
    titulo: 'Asistente virtual para agenda y recordatorios',
    descripcion: 'Gestiona tu calendario, crea eventos y envía recordatorios automáticos.',
    img: '/src/assets/imagenes/robotagenda.jpg',
    negocioIdeal: 'Consultorías, despachos, clínicas, autónomos',
    usabilidad: 'Reserva citas, enviar alertas por WhatsApp/email, recordatorios recurrentes',
    dificultad: 'Fácil',
    ventajas: ['Ahorra tiempo en tareas repetitivas', 'Mejora la puntualidad de los clientes']
  },
  {
    id: 2,
    nombre: 'Chatbot eCommerce',
    titulo: 'Atención al cliente 24/7 para tiendas online',
    descripcion: 'Responde preguntas frecuentes, recomienda productos y ayuda en el proceso de compra.',
    img: '/src/assets/imagenes/robotecommerce.jpg',
    negocioIdeal: 'Tiendas online, dropshipping, marketplaces',
    usabilidad: 'Recomienda productos, responde preguntas frecuentes, asiste en checkout',
    dificultad: 'Media',
    ventajas: ['Reduce cargas de soporte', 'Aumenta la conversión de compra']
  },
  {
    id: 3,
    nombre: 'Redactor IA',
    titulo: 'Generador de contenido para blogs y redes',
    descripcion: 'Crea textos optimizados para SEO, posts, descripciones de productos y más.',
    img: '/src/assets/imagenes/robotblog.jpg',
    negocioIdeal: 'Agencias de marketing, eCommerce, blogs personales, pymes',
    usabilidad: 'Genera artículos, descripciones de productos y correos en segundos',
    dificultad: 'Fácil',
    ventajas: ['Mejora el posicionamiento web', 'Ahorra costes en creación de contenido']
  },
  {
    id: 4,
    nombre: 'Asistente Comercial',
    titulo: 'Comparador de modelos, precios y financiación',
    descripcion: 'Ayuda a los clientes a elegir productos complejos como coches o seguros.',
    img: '/src/assets/imagenes/robotcomercial.jpg',
    negocioIdeal: 'Concesionarios, aseguradoras, inmobiliarias',
    usabilidad: 'Filtra necesidades, compara precios, muestra financiación',
    dificultad: 'Media',
    ventajas: ['Facilita decisiones complejas', 'Genera leads cualificados']
  },
  {
    id: 5,
    nombre: 'Asistente de Comercio',
    titulo: 'Atención y automatización para tiendas físicas',
    descripcion: 'Ayuda con horarios, stock, devoluciones y promociones locales.',
    img: '/src/assets/imagenes/robotcomercio.jpg',
    negocioIdeal: 'Tiendas físicas, restaurantes, centros estéticos',
    usabilidad: 'Atiende desde web/WhatsApp, informa sobre horarios, promociones o devoluciones',
    dificultad: 'Fácil',
    ventajas: ['Reduce interrupciones al personal', 'Mejora la experiencia del cliente']
  },
  {
    id: 6,
    nombre: 'Newsletter Bot',
    titulo: 'Asistente de email marketing',
    descripcion: 'Crea campañas automáticas de promociones, novedades o eventos.',
    img: '/src/assets/imagenes/robotnewsettler.jpg',
    negocioIdeal: 'eCommerce, academias online, eventos',
    usabilidad: 'Segmenta clientes, redacta y programa campañas de email',
    dificultad: 'Media',
    ventajas: ['Aumenta la retención de clientes', 'Automatiza la comunicación']
  },
  {
    id: 7,
    nombre: 'Generador de Presupuestos',
    titulo: 'Crea presupuestos rápidos a partir de texto',
    descripcion: 'Clientes describen su necesidad y el sistema genera un PDF estimativo.',
    img: '/src/assets/imagenes/robotpresupuestos.jpg',
    negocioIdeal: 'Servicios técnicos, reformas, mantenimiento, freelances',
    usabilidad: 'Cliente describe su necesidad, genera PDF estimativo y lo envía automáticamente',
    dificultad: 'Fácil',
    ventajas: ['Acelera el cierre de ventas', 'Proporciona atención inmediata']
  },
  {
    id: 8,
    nombre: 'Recepcionista Virtual',
    titulo: 'Agente de recepción digital inteligente',
    descripcion: 'Filtra clientes reales, responde preguntas frecuentes y dirige a la persona adecuada.',
    img: '/src/assets/imagenes/robotrecepcionista.jpg',
    negocioIdeal: 'Clínicas, bufetes, agencias, coworkings',
    usabilidad: 'Atiende por chat, recoge datos, redirige por temas',
    dificultad: 'Media',
    ventajas: ['Reduce distracciones del equipo', 'Atiende 24/7 sin perder leads']
  }
]



const agenteSeleccionado = ref(null)

function abrirDetalle(agente) {
  agenteSeleccionado.value = agente
}

function cerrarDetalle() {
  agenteSeleccionado.value = null
}
</script>

<template>
  <section class="agentes-container">
    <h1>Catálogo de Agentes IA</h1>

    <div class="grid-agentes">
      <div v-for="agente in agentes" :key="agente.id" class="agente-card" @click="abrirDetalle(agente)" tabindex="0"
        role="button" @keyup.enter="abrirDetalle(agente)">
        <div class="cuadrado">
          <img :src="agente.img" :alt="agente.nombre" class="agente-img" />
          <h2 class="titulo">{{ agente.titulo }}</h2>
        </div>
      </div>
    </div>
    <!-- Modal Detalle -->
    <div v-if="agenteSeleccionado" class="modal-overlay" @click.self="cerrarDetalle">
      <div class="modal">
        <button class="cerrar-btn" @click="cerrarDetalle" aria-label="Cerrar">&times;</button>
        <img :src="agenteSeleccionado.img" :alt="agenteSeleccionado.nombre"
          style="width: 100%; border-radius: 12px; margin-bottom: 1rem;" />
        <h2>{{ agenteSeleccionado.titulo }}</h2>
        <p style="margin: 0.5rem 0;">{{ agenteSeleccionado.descripcion }}</p>
        <ul class="info-detalle">
          <li><strong>Negocio ideal:</strong> {{ agenteSeleccionado.negocioIdeal }}</li>
          <li><strong>Usabilidad:</strong> {{ agenteSeleccionado.usabilidad }}</li>
          <li><strong>Dificultad de implementación:</strong> {{ agenteSeleccionado.dificultad }}</li>
        </ul>
        <div>
          <strong>Ventajas:</strong>
          <ul>
            <li v-for="(ventaja, index) in agenteSeleccionado.ventajas" :key="index">{{ ventaja }}</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.agentes-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.grid-agentes {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.agente-card {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  outline: none;
  background: white;
}

.agente-card:hover,
.agente-card:focus {
  box-shadow: 0 6px 16px rgb(0 0 0 / 0.2);
}

.cuadrado {
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  background: #f9f9f9;
}

.agente-img {
  width: 80%;
  max-width: 200px;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.titulo {
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  margin: 0;
}

/* Modal estilos */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  position: relative;
  text-align: left;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  max-height: 80vh;
  /* Máximo 80% del alto de la ventana */
  overflow-y: auto;
  /* Scroll vertical si hace falta */
}

.cerrar-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease;
}

.cerrar-btn:hover {
  color: black;
}
</style>
