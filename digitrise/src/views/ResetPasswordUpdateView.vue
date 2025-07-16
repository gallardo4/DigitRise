<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()

const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const message = ref('')
const isError = ref(false)

async function updatePassword() {
  message.value = ''
  isError.value = false

  if (password.value !== confirmPassword.value) {
    message.value = 'Las contraseñas no coinciden.'
    isError.value = true
    return
  }

  loading.value = true

  const { error } = await supabase.auth.updateUser({
    password: password.value,
  })

  loading.value = false

  if (error) {
    message.value = 'Error al actualizar la contraseña: ' + error.message
    isError.value = true
    return
  }

  message.value = 'Contraseña actualizada correctamente.'
  isError.value = false

  setTimeout(() => {
    router.push('/login')
  }, 1500)
}

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  if (!data.session) {
    message.value = 'Sesión inválida o expirada. Solicita un nuevo enlace de restablecimiento.'
    isError.value = true
    setTimeout(() => {
      router.push('/reset-password')
    }, 2000)
  }
})
</script>

<template>
  <section class="reset-password">
    <div class="containerResetPassword">
      <h1 class="tituloGrande">Nueva Contraseña</h1>

      <form @submit.prevent="updatePassword" class="formulario">
        <div class="inputGroup">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder=" "
            required
          />
          <label for="password">Nueva contraseña</label>
        </div>

        <div class="inputGroup">
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder=" "
            required
          />
          <label for="confirmPassword">Confirmar contraseña</label>
        </div>

        <button type="submit" class="btn" onclick="this.blur()" :disabled="loading">
          {{ loading ? 'Actualizando...' : 'Actualizar contraseña' }}
        </button>

        <p v-if="message" :class="['form-message', isError ? 'error' : 'success']">
          {{ message }}
        </p>
      </form>

      <p class="texto">
        ¿Ya tenías una cuenta?
        <RouterLink to="/login" class="loginBtn">
          <strong>Inicia sesión aquí</strong>
        </RouterLink>
      </p>
    </div>
  </section>
</template>
