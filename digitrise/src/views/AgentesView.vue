<script setup>
import { ref } from 'vue'

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
    <h1 class="tituloGrande">Catálogo de Agentes IA</h1>

    <div class="grid-agentes">
      <div v-for="agente in agentes" :key="agente.id" class="agente-card" @click="abrirDetalle(agente)" tabindex="0"
        role="button" @keyup.enter="abrirDetalle(agente)">
        <div class="cuadrado">
          <img :src="agente.img" :alt="agente.nombre" class="agente-img" />
          <h2 class="tituloLittle">{{ agente.nombre }}</h2>
        </div>
      </div>
    </div>

    <!-- MODAL -->

    <div v-if="agenteSeleccionado" class="modal-overlay" @click.self="cerrarDetalle">
      <div class="modal">
        <button class="cerrar-btn" @click="cerrarDetalle" aria-label="Cerrar">&times;</button>
        <img class="imgAgente" :src="agenteSeleccionado.img" :alt="agenteSeleccionado.nombre" />
        <h2 class="tituloLittle">{{ agenteSeleccionado.titulo }}</h2>
        <p class="texto" style="margin: 0.5rem 0;">{{ agenteSeleccionado.descripcion }}</p>
        <ul class="info-detalle">
          <li class="texto"><strong>Negocio ideal:</strong> {{ agenteSeleccionado.negocioIdeal }}</li>
          <li class="texto"><strong>Usabilidad:</strong> {{ agenteSeleccionado.usabilidad }}</li>
          <li class="texto"><strong>Dificultad de implementación:</strong> {{ agenteSeleccionado.dificultad }}</li>
        </ul>
        <div>
          <strong class="texto">Ventajas:</strong>
          <ul>
            <li class="texto" v-for="(ventaja, index) in agenteSeleccionado.ventajas" :key="index">{{ ventaja }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>