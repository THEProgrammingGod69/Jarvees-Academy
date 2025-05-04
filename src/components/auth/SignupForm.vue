<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const authStore = useAuthStore()
const router = useRouter()
const passwordError = ref('')

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    passwordError.value = 'Passwords do not match'
    return
  }
  
  passwordError.value = ''
  await authStore.signUp(email.value, password.value)
  if (!authStore.error) {
    router.push('/')
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold spacex-title text-white mb-6">REGISTER</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-white">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
          class="spacex-input w-full"
        >
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-white">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          required
          class="spacex-input w-full"
        >
      </div>
      
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-white">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          required
          class="spacex-input w-full"
        >
      </div>
      
      <div v-if="passwordError" class="text-red-500 text-sm">
        {{ passwordError }}
      </div>
      
      <div v-if="authStore.error" class="text-red-500 text-sm">
        {{ authStore.error }}
      </div>
      
      <button
        type="submit"
        :disabled="authStore.loading"
        class="spacex-button primary w-full py-3"
      >
        {{ authStore.loading ? 'LOADING...' : 'REGISTER' }}
      </button>
    </form>
  </div>
</template>