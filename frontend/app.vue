<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const router = useRoute()
const layout = (router.name as string).startsWith('admin') ? 'admin' : 'default'
</script>