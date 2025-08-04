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

  const user = data.user
  if (!user) {
    message.value = 'No se pudo obtener el usuario.'
    isError.value = true
    return
  }

  // Verificar si el perfil ya existe
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('id')
    .eq('id', user.id)
    .single()

  // Si ocurre un error distinto a "no encontrado", mostrarlo
  if (selectError && selectError.code !== 'PGRST116') {
    message.value = 'Error verificando usuario: ' + selectError.message
    isError.value = true
    return
  }

  if (!existingUser) {
    const { error: insertError } = await supabase.from('users').insert({
      id: user.id,
      name: user.user_metadata?.name ?? '',
      email: user.email,
      last_login: new Date().toISOString(),
    })

    if (insertError) {
      message.value = 'Error al crear el perfil: ' + insertError.message
      isError.value = true
      return
    }
  } else {
    const { error: updateError } = await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id)

    if (updateError) {
      console.error('Error al actualizar el último login:', updateError.message)
    }
  }

  message.value = 'Sesión iniciada con éxito. Redirigiendo...'
  setTimeout(() => {
    router.push('/')
  }, 200)
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
