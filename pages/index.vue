<template>
  <div class="flex flex-col gap-6 items-center pt-8">
    <NuxtLink to="/login" class="bg-gray-100 rounded-md px-6 py-3">登入</NuxtLink>

    <div v-show="$pwa.needRefresh" class="bg-amber-100 p-6 rounded-md flex gap-6">
      <div class="text-sm text-amber-500">應用程序有新的版本可用</div>
      <button @click="$pwa.updateServiceWorker()">現在更新</button>
    </div>

    <NuxtWelcome></NuxtWelcome>
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa.offlineReady) {
    console.log('App ready to work offline')
  }
})
</script>

<style>

</style>

