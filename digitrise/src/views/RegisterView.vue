<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const nombre = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

async function register() {
  message.value = ''
  isError.value = false

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        name: nombre.value, // Puedes guardar el nombre como metadata opcional
      },
    },
  })

  if (error) {
    message.value = 'Error al registrarse: ' + error.message
    isError.value = true
    return
  }

  message.value = 'Registro exitoso. Revisa tu correo para confirmar tu cuenta.'
  isError.value = false

  setTimeout(() => {
    router.push('/login')
  }, 2000)
}
</script>

<template>
  <section class="register">
    <div class="containerRegister">
      <h1 class="tituloGrande">Registro</h1>

      <form @submit.prevent="register" class="formulario">
        <div class="inputGroup">
          <input type="text" id="nombre" v-model="nombre" placeholder=" " required />
          <label for="nombre">Nombre</label>
        </div>

        <div class="inputGroup">
          <input type="email" id="email" v-model="email" placeholder=" " required />
          <label for="email">Correo electrónico</label>
        </div>

        <div class="inputGroup">
          <input type="password" id="password" v-model="password" placeholder=" " required />
          <label for="password">Contraseña</label>
        </div>

        <button type="submit" class="btn" onclick="this.blur()">Registrarse</button>

        <p v-if="message" :class="['form-message', isError ? 'error' : 'success']">
          {{ message }}
        </p>
      </form>

      <p class="texto">
        ¿Ya estás registrado?
        <RouterLink to="/login" class="loginBtn">
          <strong>Inicia tu sesión</strong>
        </RouterLink>
      </p>
    </div>
  </section>
</template>
