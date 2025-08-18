<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)
const isSubmitting = ref(false)

async function login() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  message.value = ''
  isError.value = false

  console.debug('[login] submit', { email: email.value })

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value.trim(),
      password: password.value,
    })

    console.debug('[login] signIn result', { data, error })

    if (error) {
      isError.value = true
      message.value = 'Error al iniciar sesión: ' + error.message
      // opcional: limpiar password por UX
      password.value = ''
      return
    }
    if (!data?.user) {
      isError.value = true
      message.value = 'No se pudo obtener el usuario.'
      return
    }

    message.value = 'Sesión iniciada con éxito. Redirigiendo...'

    // Redirige a la ruta original si venías de una protegida
    const redirect = (route.query.redirect as string) || '/'

    // Libera el botón y navega sin bloquear el hilo
    isSubmitting.value = false
    await nextTick()
    router.replace(redirect).catch((err) => {
      console.warn('[login] router.replace error:', err)
    })
  } catch (e: any) {
    console.error('[login] unexpected error', e)
    isError.value = true
    message.value = 'Ha ocurrido un error inesperado. Inténtalo de nuevo.'
  } finally {
    // Salvaguarda por si algo falló antes de liberar
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="login">
    <div class="containerLogin">
      <h1 class="tituloGrande">Inicio de Sesión</h1>

      <p class="texto">
        <strong>Inicia sesión para seguir explorando.</strong>
      </p>

      <form @submit.prevent="login" class="formulario">
        <div class="inputGroup">
          <input type="email" id="email" v-model="email" placeholder=" " required />
          <label for="email">Correo electrónico</label>
        </div>

        <div class="inputGroup">
          <input type="password" id="password" v-model="password" placeholder=" " required />
          <label for="password">Contraseña</label>
        </div>

        <button type="submit" class="btn" :disabled="isSubmitting" onclick="this.blur()">
          {{ isSubmitting ? 'Entrando...' : 'Iniciar Sesión' }}
        </button>

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
