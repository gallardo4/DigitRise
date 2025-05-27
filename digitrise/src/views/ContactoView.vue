<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')

function enviarFormulario() {
  console.log('Formulario enviado:', { nombre: nombre.value, email: email.value, mensaje: mensaje.value })
  // Aquí puedes hacer un fetch o axios POST
  alert('Gracias por tu mensaje. Te responderemos pronto.')
  nombre.value = ''
  email.value = ''
  mensaje.value = ''
}
</script>

<template>
  <section class="contacto">
    <div class="containerContacto">
      <h1 class="tituloContacto">Contacto</h1>
      <p class="textoContacto">¿Tienes dudas o quieres más información? Rellena el formulario y nos pondremos en contacto contigo:</p>

      <form @submit.prevent="enviarFormulario" class="formulario">
        <div class="inputGroup">
          <input type="text" id="nombre" v-model="nombre" placeholder=" " required />
          <label for="nombre">Nombre</label>
        </div>

        <div class="inputGroup">
          <input type="email" id="email" v-model="email" placeholder=" " required />
          <label for="email">Correo electrónico</label>
        </div>

        <div class="inputGroup">
          <textarea id="mensaje" v-model="mensaje" placeholder=" " rows="5" required></textarea>
          <label for="mensaje">Mensaje</label>
        </div>

        <button type="submit" class="btnContacto">Enviar</button>
      </form>
    </div>
  </section>
</template>