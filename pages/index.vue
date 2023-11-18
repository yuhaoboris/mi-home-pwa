<template>
  <div class="flex flex-col gap-6 items-center pt-8">
    <NuxtLink to="/login" class="bg-gray-100 rounded-md px-6 py-3 hover:bg-gray-200">登入</NuxtLink>

    <NuxtImg src="/uec-logo.png" class="w-32"></NuxtImg>

    <h1 class="text-3xl font-bold">UEC Plug</h1>

    <p>顯示通知 <span class="text-xs px-1 py-0.5 rounded bg-blue-300">{{ isSupported }}</span></p>
  </div>
</template>

<script setup>
const { isSupported } = useWebNotification()
const { $pwa } = useNuxtApp()
const swr = $pwa.getSWRegistration()
</script>

<style>

</style>

