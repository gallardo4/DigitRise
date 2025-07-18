<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()

// Define el usuario con propiedades obligatorias, pero permitiendo null
const user = ref<{ email: string | null; name: string | null } | null>(null)

onMounted(async () => {
  const { data } = await supabase.auth.getSession()

  // Si no hay sesión, redirige al login
  if (!data.session) {
    router.push('/login')
  } else {
    const { user: sessionUser } = data.session

    user.value = {
      email: sessionUser.email ?? null,
      name: sessionUser.user_metadata?.name ?? null,
    }
  }
})
</script>

<template>
  <section class="perfil">
    <div class="containerPerfil" v-if="user">
      <h1 class="tituloGrande">Mi Perfil</h1>

      <div class="perfil-info">
        <p class="texto"><strong>Nombre:</strong> {{ user.name || 'No especificado' }}</p>
        <p class="texto"><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>

    <div v-else class="cargando">
      <p>Cargando datos de usuario...</p>
    </div>
  </section>
</template>