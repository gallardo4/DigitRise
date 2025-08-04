<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const user = ref<{ email: string | null; name: string | null } | null>(null)

const checkSession = async () => {
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    user.value = null
    router.push('/login')
  } else {
    const { user: sessionUser } = data.session
    user.value = {
      email: sessionUser.email ?? null,
      name: sessionUser.user_metadata?.name ?? null,
    }
  }
}

onMounted(async () => {
  await checkSession()

  // Escuchar cambios de autenticación (inicio/cierre de sesión)
  const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
    if (!session) {
      user.value = null
      router.push('/login')
    } else {
      user.value = {
        email: session.user.email ?? null,
        name: session.user.user_metadata?.name ?? null,
      }
    }
  })

  // Limpieza del listener al desmontar
  onBeforeUnmount(() => {
    authListener.subscription.unsubscribe()
  })
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