<script setup lang="ts">
import SignupForm from '../../components/auth/SignupForm.vue'
import { useAuthStore } from '../../store/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (authStore.user) {
    router.push('/')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 star-field">
    <div class="w-full max-w-md space-y-8 spacex-fade-in">
      <div class="text-center">
        <img src="/src/assets/LOGO.jpg" alt="JARVEES INFOTECH" class="h-16 w-auto mx-auto mb-4">
        <h1 class="text-3xl font-bold spacex-title text-white">CREATE AN ACCOUNT</h1>
        <p class="mt-2 text-sm text-gray-300">
          Already have an account?
          <RouterLink to="/auth/login" class="font-medium text-white hover:text-gray-400 underline">
            Log in
          </RouterLink>
        </p>
      </div>

      <div class="spacex-glass p-6 rounded-lg">
        <SignupForm />
      </div>
    </div>
  </div>
</template>