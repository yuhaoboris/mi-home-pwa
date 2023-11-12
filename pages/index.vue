<template>
  <div class="flex flex-col gap-6 items-center pt-8">
    <NuxtLink to="/login" class="bg-gray-100 rounded-md px-6 py-3">登入</NuxtLink>

    <div v-show="$pwa.needRefresh" class="p-4 bg-amber-50 rounded-md">
      <span class="text-amber-500 text-sm">New Content available, click on reload button to update.</span>

      <button @click="$pwa.updateServiceWorker()">Reload</button>
    </div>

    <NuxtWelcome></NuxtWelcome>
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp()
</script>

<style>

</style>

