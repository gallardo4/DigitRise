<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function volver() {
  router.back()
}
</script>

<template>
  <button class="btnVolver" @click="volver">
    🡠 Volver
  </button>
</template>