<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'
import bcrypt from 'bcryptjs'

const router = useRouter()
const nombre = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

async function register() {
  message.value = ''
  isError.value = false

  // Crear el usuario en Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        name: nombre.value,
      },
    },
  })

  if (error) {
    message.value = 'Error al registrarse: ' + error.message
    isError.value = true
    return
  }

  const user = data.user
  if (!user) {
    message.value = 'No se pudo completar el registro.'
    isError.value = true
    return
  }

  // Hashear la contraseña antes de guardarla
  const hashedPassword = await bcrypt.hash(password.value, 10)

  // Guardar los datos en tu tabla personalizada 'users'
  const { error: insertError } = await supabase.from('users').insert({
    id: user.id,
    name: nombre.value,
    email: email.value,
    hashed_password: hashedPassword, // ⚠️ ¡Nunca guardes la original!
    last_login: new Date().toISOString(),
  })

  if (insertError) {
    message.value = 'Error al guardar en la base de datos: ' + insertError.message
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

      <p class="texto">
        <strong>Únete a la comunidad que transforma ideas en realidades.</strong>
      </p>

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
