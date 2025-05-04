<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const logout = async () => {
  await authStore.logout();
  router.push('/');
};
</script>

<template>
  <nav class="spacex-nav fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center space-x-3">
            <img src="/src/assets/LOGO.jpg" alt="JARVEES INFOTECH" class="h-10 w-auto">
            <RouterLink to="/" class="text-white text-xl font-bold spacex-title">JARVEES INFOTECH</RouterLink>
          </div>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink to="/home" class="spacex-nav-link text-sm font-medium">HOME</RouterLink>
          <RouterLink to="/about" class="spacex-nav-link text-sm font-medium">ABOUT</RouterLink>
          <RouterLink to="/training" class="spacex-nav-link text-sm font-medium">TRAINING</RouterLink>
          <RouterLink to="/solutions" class="spacex-nav-link text-sm font-medium">SOLUTIONS</RouterLink>
          <RouterLink to="/contact" class="spacex-nav-link text-sm font-medium">CONTACT</RouterLink>
          
          <!-- Auth Links -->
          <template v-if="authStore.user">
            <button @click="logout" class="spacex-button text-sm py-2 px-4">LOGOUT</button>
          </template>
          <template v-else>
            <RouterLink to="/auth/login" class="spacex-button text-sm py-2 px-4">LOGIN</RouterLink>
            <RouterLink to="/auth/signup" class="spacex-button primary text-sm py-2 px-4">REGISTER</RouterLink>
          </template>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex md:hidden items-center">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden spacex-glass">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink to="/home" class="text-white block px-3 py-2 text-base font-medium">HOME</RouterLink>
        <RouterLink to="/about" class="text-white block px-3 py-2 text-base font-medium">ABOUT</RouterLink>
        <RouterLink to="/training" class="text-white block px-3 py-2 text-base font-medium">TRAINING</RouterLink>
        <RouterLink to="/solutions" class="text-white block px-3 py-2 text-base font-medium">SOLUTIONS</RouterLink>
        <RouterLink to="/contact" class="text-white block px-3 py-2 text-base font-medium">CONTACT</RouterLink>
        
        <!-- Auth Links Mobile -->
        <div class="pt-4 pb-3 border-t border-gray-700">
          <template v-if="authStore.user">
            <button @click="logout" class="w-full text-left text-white block px-3 py-2 text-base font-medium">LOGOUT</button>
          </template>
          <template v-else>
            <RouterLink to="/auth/login" class="text-white block px-3 py-2 text-base font-medium">LOGIN</RouterLink>
            <RouterLink to="/auth/signup" class="text-white block px-3 py-2 text-base font-medium">REGISTER</RouterLink>
          </template>
        </div>
      </div>
    </div>
  </nav>
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-20"></div>
</template>