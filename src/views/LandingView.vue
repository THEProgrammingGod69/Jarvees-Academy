<script setup lang="ts">
//import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
  router.push('/auth/login');
};

const navigateToSignup = () => {
  router.push('/auth/signup');
};
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section with Video Background -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video autoplay loop muted playsinline class="w-full h-full object-cover">
          <source src="/src/assets/tech-bg.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 spacex-gradient-overlay"></div>
      </div>

      <!-- Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
        <div class="spacex-fade-in">
          <div class="flex items-center justify-center mb-6">
            <img src="/src/assets/LOGO.jpg" alt="JARVEES INFOTECH" class="h-20 w-auto mr-4">
            <h1 class="text-5xl md:text-7xl font-bold spacex-title">JARVEES INFOTECH</h1>
          </div>
          
          <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto spacex-subtitle">
            Pioneering the future through advanced technology and innovative solutions
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <button @click="navigateToLogin" class="spacex-button primary text-lg px-8 py-4">
              LOGIN
            </button>
            <button @click="navigateToSignup" class="spacex-button text-lg px-8 py-4">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24 relative overflow-hidden spacex-bg">
      <div class="spacex-grid absolute inset-0 opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 spacex-fade-in">
          <h2 class="text-4xl font-bold mb-6 spacex-title">OUR MISSION</h2>
          <div class="spacex-divider mx-auto w-24 mb-8"></div>
          <p class="text-xl max-w-3xl mx-auto spacex-glass p-8">
            To accelerate the world's transition to advanced technology through cutting-edge training and innovative IT solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <!-- Feature 1 -->
          <div class="spacex-card p-8 spacex-fade-in" style="animation-delay: 0.2s">
            <h3 class="text-2xl font-bold mb-4 spacex-title">Advanced Training</h3>
            <p class="text-gray-300 mb-4">Next-generation training programs designed to elevate your technical expertise.</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="spacex-card p-8 spacex-fade-in" style="animation-delay: 0.4s">
            <h3 class="text-2xl font-bold mb-4 spacex-title">IT Solutions</h3>
            <p class="text-gray-300 mb-4">Revolutionary IT solutions engineered to transform your business for the digital age.</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="spacex-card p-8 spacex-fade-in" style="animation-delay: 0.6s">
            <h3 class="text-2xl font-bold mb-4 spacex-title">Innovation</h3>
            <p class="text-gray-300 mb-4">Pioneering the future with cutting-edge technologies and forward-thinking approaches.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 relative overflow-hidden star-field">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="spacex-glass p-12 spacex-fade-in">
          <h2 class="text-4xl font-bold spacex-title mb-6">Ready to Pioneer the Future?</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">Join us on our mission to transform the technological landscape.</p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button @click="navigateToSignup" class="spacex-button primary text-lg px-8 py-4">
              GET STARTED
            </button>
            <button @click="router.push('/contact')" class="spacex-button text-lg px-8 py-4">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  overflow-x: hidden;
}
</style>