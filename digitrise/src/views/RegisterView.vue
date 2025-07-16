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

  // Paso 1: Crear usuario en Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (authError) {
    message.value = 'Error al registrarse: ' + authError.message
    isError.value = true
    return
  }

  const userId = authData.user?.id
  if (!userId) {
    message.value = 'No se pudo obtener el ID del usuario.'
    isError.value = true
    return
  }

  // Esperar a que la sesión esté lista para insertar como el usuario autenticado
  const { data: userData, error: sessionError } = await supabase.auth.getUser()
  if (sessionError || !userData.user) {
    message.value = 'Sesión inválida. Vuelve a intentarlo.'
    isError.value = true
    return
  }

  // Paso 2: Insertar en tabla "users" (bajo RLS del usuario logueado)
  const { error: dbError } = await supabase.from('users').insert({
    id: userId,
    name: nombre.value,
    email: email.value,
    last_login: new Date().toISOString(),
  })

  if (dbError) {
    message.value = 'Error al guardar en la base de datos: ' + dbError.message
    isError.value = true
    return
  }

  message.value = 'Registro exitoso. Revisa tu correo para confirmar tu cuenta.'
  isError.value = false

  setTimeout(() => {
    router.push('/login')
  }, 1500)
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
