<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

async function login() {
  message.value = ''
  isError.value = false

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    message.value = 'Error al iniciar sesión: ' + error.message
    isError.value = true
    return
  }

  const userId = data.user?.id
  if (!userId) {
    message.value = 'No se pudo obtener el ID del usuario.'
    isError.value = true
    return
  }

  const { error: updateError } = await supabase
    .from('users')
    .update({ last_login: new Date().toISOString() })
    .eq('id', userId)

  if (updateError) {
    message.value = 'Error al actualizar último acceso: ' + updateError.message
    isError.value = true
    return
  }

  message.value = 'Sesión iniciada con éxito. Redirigiendo...'
  isError.value = false

  setTimeout(() => {
    router.push('/home')
  }, 1000)
}
</script>

<template>
  <section class="login">
    <div class="containerLogin">
      <h1 class="tituloGrande">Inicio de Sesión</h1>

      <form @submit.prevent="login" class="formulario">
        <div class="inputGroup">
          <input type="email" id="email" v-model="email" placeholder=" " required />
          <label for="email">Correo electrónico</label>
        </div>

        <div class="inputGroup">
          <input type="password" id="password" v-model="password" placeholder=" " required />
          <label for="password">Contraseña</label>
        </div>

        <button type="submit" class="btn" onclick="this.blur()">Iniciar Sesión</button>

        <p v-if="message" :class="['form-message', isError ? 'error' : 'success']">
          {{ message }}
        </p>
      </form>

      <p class="texto">
        ¿Olvidaste tu contraseña?
        <RouterLink to="/reset-password" class="resetPasswordBtn">
          <strong>Restablecer aquí</strong>
        </RouterLink>
      </p>

      <p class="texto">
        ¿Todavía no tienes cuenta?
        <RouterLink to="/register" class="registerBtn">
          <strong>Regístrate aquí</strong>
        </RouterLink>
      </p>
    </div>
  </section>
</template>
