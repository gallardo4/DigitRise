<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    alert('Error al iniciar sesión: ' + error.message)
    return
  }

  const userId = data.user?.id
  if (!userId) {
    alert('No se pudo obtener el ID del usuario')
    return
  }

  // Actualizar last_login en tabla users
  const { error: updateError } = await supabase
    .from('users')
    .update({ last_login: new Date().toISOString() })
    .eq('id', userId)

  if (updateError) {
    alert('Error al actualizar último acceso: ' + updateError.message)
    return
  }

  alert('Sesión iniciada con éxito')
  router.push('/home') // Ajusta la ruta donde quieres redirigir
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

        <p class="texto">
          ¿Todavía no tienes cuenta?
          <RouterLink to="/register" class="registerBtn">
            <strong>Regístrate aquí</strong>
          </RouterLink>
        </p>

        <button type="submit" class="btn">Iniciar Sesión</button>
      </form>
    </div>
  </section>
</template>
