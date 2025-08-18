<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const router = useRouter()
const loading = ref(true)
const user = ref<{ email: string | null; name: string | null } | null>(null)
let authUnsub: (() => void) | null = null

function setFromSession(session: Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session']) {
  if (!session) {
    user.value = null
  } else {
    user.value = {
      email: session.user.email ?? null,
      name: session.user.user_metadata?.name ?? null,
    }
  }
}

onMounted(async () => {
  // 1) Suscríbete antes para captar INITIAL_SESSION
  const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
    // console.log('[perfil] auth event:', event, !!session)
    if (event === 'INITIAL_SESSION') {
      setFromSession(session)
      loading.value = false
      if (!session) router.replace('/login')
    } else if (event === 'SIGNED_IN') {
      setFromSession(session)
      loading.value = false  // <-- importante!
    } else if (event === 'SIGNED_OUT') {
      user.value = null
      loading.value = false
      router.replace('/login')
    }
  })
  authUnsub = () => listener.subscription.unsubscribe()

  // 2) Estado inicial (por si ya está disponible)
  const { data, error } = await supabase.auth.getSession()
  if (error) console.error('getSession error:', error.message)
  if (data.session) {
    setFromSession(data.session)
    loading.value = false
  }
})

onBeforeUnmount(() => authUnsub?.())
</script>

<template>
  <section class="perfil">
    <div v-if="loading" class="cargando">
      <p>Cargando datos de usuario...</p>
    </div>

    <div v-else-if="user" class="containerPerfil">
      <h1 class="tituloGrande">Mi Perfil</h1>
      <div class="perfil-info">
        <p class="texto"><strong>Nombre:</strong> {{ user.name || 'No especificado' }}</p>
        <p class="texto"><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>

    <div v-else class="cargando">
      <p>No hay sesión iniciada.</p>
    </div>
  </section>
</template>