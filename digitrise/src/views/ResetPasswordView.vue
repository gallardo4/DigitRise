<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const email = ref('')
const message = ref('')
const isError = ref(false)

async function resetPassword() {
  message.value = ''
  isError.value = false

  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'https://digitrise.net/reset-password-update',
  })

  if (error) {
    message.value = 'Error al enviar el enlace de restablecimiento: ' + error.message
    isError.value = true
    return
  }

  message.value = 'Enlace de restablecimiento enviado a tu correo electrónico.'
  isError.value = false

  setTimeout(() => {
    router.push('/login')
  }, 1500)
}
</script>

<template>
  <section class="reset-password">
    <div class="containerResetPassword">
      <h1 class="tituloGrande">Restablecer Contraseña</h1>

      <p class="texto">
        Introduce tu correo electrónico para recibir un enlace de restablecimiento de contraseña.
      </p>

      <form @submit.prevent="resetPassword" class="formulario">
        <div class="inputGroup">
          <input type="email" id="email" v-model="email" placeholder=" " required />
          <label for="email">Correo electrónico</label>
        </div>

        <button type="submit" class="btn" onclick="this.blur()">Enviar enlace de restablecimiento</button>

        <p v-if="message" :class="['form-message', isError ? 'error' : 'success']">
          {{ message }}
        </p>
      </form>

      <p class="texto"><strong>Este proceso puede tardar unos minutos</strong></p>

      <p class="texto">
        ¿Recuperaste tu contraseña?
        <RouterLink to="/login" class="loginBtn">
          <strong>Inicia sesión aquí</strong>
        </RouterLink>
      </p>
    </div>
  </section>
</template>
