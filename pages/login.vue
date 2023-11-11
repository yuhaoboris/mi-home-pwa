<template>
  <div class="flex flex-col items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white">
    <NuxtImg src="/uec-logo.png" class="w-16 h-16" alt="UEC Logo"></NuxtImg>
    <span>UEC Smart Plug</span>
  </div>

  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 sm:p-8">
      <UForm
        :state="form"
        :validate="validate"
        class="space-y-6"
        @submit="onSubmit">
        <UFormGroup label="帳號" name="account" size="lg">
          <UInput
            v-model="form.account"
            icon="i-heroicons-user"
            placeholder="輸入使用者帳號">
          </UInput>
        </UFormGroup>

        <UFormGroup label="密碼" name="password" size="lg">
          <UInput
            v-model="form.password"
            icon="i-heroicons-lock-closed"
            type="password"
            placeholder="輸入使用者的帳號密碼">
          </UInput>
        </UFormGroup>

        <div class="w-full flex justify-between">
          <UCheckbox v-model="form.remember" label="記住帳號"></UCheckbox>

          <div class="text-gray-400 text-sm">忘記密碼？</div>
        </div>

        <UButton block size="lg" type="submit">登入</UButton>

        <UDivider label="沒有帳號" :ui="{ label: 'text-gray-400 font-normal' }"></UDivider>

        <UButton block variant="link">註冊帳號</UButton>
      </UForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'login'
})

const form = reactive({
  account: undefined,
  password: undefined,
  remember: false
})

const validate = state => {
  const errors = []

  if (!state.account) {
    errors.push({
      path: 'account',
      message: '請輸入使用者帳號'
    })
  }

  if (!state.password) {
    errors.push({
      path: 'password',
      message: '請輸入使用者帳號密碼'
    })
  }

  return errors
}

async function onSubmit (event) {
  console.log('account', event.data)
}
</script>

<style>

</style>

