<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()

const nombre = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)
const isSubmitting = ref(false)

async function register() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  message.value = ''
  isError.value = false

  try {
    const { error } = await supabase.auth.signUp({
      email: email.value.trim(),
      password: password.value,
      options: {
        data: { name: nombre.value },
      },
    })

    if (error) {
      isError.value = true
      message.value = 'Error al registrarse: ' + error.message
      return
    }

    message.value = 'Registro exitoso. Revisa tu correo para confirmar tu cuenta.'
    isError.value = false

    isSubmitting.value = false
    await nextTick()
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  } catch {
    isError.value = true
    message.value = 'Ha ocurrido un error inesperado. Inténtalo de nuevo.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="register">
    <div class="containerRegister">
      <h1 class="tituloGrande">Registro</h1>
      <p class="texto"><strong>Únete a la comunidad que transforma ideas en realidades.</strong></p>

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

        <button type="submit" class="btn" :disabled="isSubmitting" onclick="this.blur()">
          {{ isSubmitting ? 'Registrando...' : 'Registrarse' }}
        </button>

        <p v-if="message" :class="['form-message', isError ? 'error' : 'success']">
          {{ message }}
        </p>
      </form>

      <p class="texto">
        ¿Ya estás registrado?
        <RouterLink to="/login" class="loginBtn"><strong>Inicia tu sesión</strong></RouterLink>
      </p>
    </div>
  </section>
</template>