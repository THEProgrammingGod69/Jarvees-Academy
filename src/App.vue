<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ParticleBackground from './components/ui/ParticleBackground.vue'
import './assets/spacex.css'
</script>

<template>
  <div class="min-h-screen flex flex-col spacex-bg text-white relative">
    <ParticleBackground />
    <Navbar />
    <main class="flex-grow relative z-10">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
