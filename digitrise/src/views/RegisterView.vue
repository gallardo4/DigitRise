<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'

const router = useRouter()
const nombre = ref('')
const email = ref('')
const password = ref('')

async function register() {
  // Paso 1: Crear usuario en Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (authError) {
    alert('Error al registrarse: ' + authError.message)
    return
  }

  const userId = authData.user?.id
  if (!userId) {
    alert('No se pudo obtener el ID del usuario.')
    return
  }

  // Paso 2: Insertar en tu tabla 'users' personalizada
  const { error: dbError } = await supabase.from('users').insert({
    id: userId,
    name: nombre.value,
    email: email.value,
    last_login: new Date().toISOString(), // created_at se autogenera
    // plan, is_active y role tienen valores por defecto
  })

  if (dbError) {
    alert('Error al guardar en la base de datos: ' + dbError.message)
    return
  }

  alert('Registro exitoso. Revisa tu correo para confirmar tu cuenta.')
  router.push('/login')
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

        <p class="texto">
          ¿Ya estás registrado?
          <RouterLink to="/login" class="loginBtn">
            <strong>Inicia tu sesión</strong>
          </RouterLink>
        </p>

        <button type="submit" class="btn">Registrarse</button>
      </form>
    </div>
  </section>
</template>
