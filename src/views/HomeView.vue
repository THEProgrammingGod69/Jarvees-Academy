<template>
  <div class="cyber-grid">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-black">
        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-50">
          <source src="/src/assets/tech-bg.mp4" type="video/mp4">
        </video>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="md:w-1/2 text-center md:text-left fade-in">
            <div class="flex items-center justify-center md:justify-start mb-6 space-x-4">
              <img src="/src/assets/LOGO.jpg" alt="JARVEES INFOTECH" class="h-16 w-auto">
              <h1 class="text-4xl md:text-6xl font-bold leading-tight cyber-text">JARVEES INFOTECH</h1>
            </div>
            <p class="text-xl mb-8 cyber-card p-6 text-white">Empowering businesses through next-generation technology and knowledge. We deliver cutting-edge training and innovative IT solutions for the future.</p>
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/training" class="cyber-button px-8 py-4">Explore Training</a>
              <a href="/solutions" class="cyber-button px-8 py-4">Discover Solutions</a>
            </div>
          </div>
          <div class="md:w-1/2 float-element">
            <img src="/src/assets/hero-image.svg" alt="Technology Illustration" class="w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 relative overflow-hidden">
      <div class="cyber-grid absolute inset-0 opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-4xl font-bold mb-6 cyber-text inline-block">Innovative Services</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto cyber-card p-6">Pioneering the future of technology with advanced training programs and cutting-edge IT solutions tailored for tomorrow's challenges.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Training Card -->
          <div class="cyber-card p-1 transform hover:-translate-y-2 transition-all duration-300">
            <div class="p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-transparent opacity-10 transform rotate-45"></div>
              <h3 class="text-3xl font-bold cyber-text mb-4">Advanced Training</h3>
              <p class="text-gray-300 mb-6 text-lg">Next-generation training programs engineered to elevate your technical expertise to unprecedented levels.</p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cutting-edge technical courses</span>
                </li>
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Elite industry certifications</span>
                </li>
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Immersive learning experience</span>
                </li>
              </ul>
              <RouterLink to="/training" class="cyber-button inline-block px-8 py-3">
                Explore Programs
              </RouterLink>
            </div>
          </div>

          <!-- Solutions Card -->
          <div class="cyber-card p-1 transform hover:-translate-y-2 transition-all duration-300">
            <div class="p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-transparent opacity-10 transform rotate-45"></div>
              <h3 class="text-3xl font-bold cyber-text mb-4">Future Solutions</h3>
              <p class="text-gray-300 mb-6 text-lg">Revolutionary IT solutions engineered to transform your business for the digital age.</p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Advanced software engineering</span>
                </li>
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Next-gen cloud architecture</span>
                </li>
                <li class="flex items-center space-x-3 text-gray-200">
                  <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>AI-driven transformation</span>
                </li>
              </ul>
              <RouterLink to="/solutions" class="cyber-button inline-block px-8 py-3">
                Discover Future
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 relative overflow-hidden">
      <div class="cyber-grid absolute inset-0 opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="cyber-card p-12 backdrop-blur-lg">
          <div class="flex items-center justify-center space-x-6 mb-8">
            <img src="/src/assets/LOGO.jpg" alt="JARVEES INFOTECH" class="h-16 w-auto">
            <h2 class="text-4xl font-bold cyber-text">Ready to Pioneer the Future?</h2>
          </div>
          <p class="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">Join forces with JARVEES INFOTECH to revolutionize your business through cutting-edge training and next-generation IT solutions.</p>
          <RouterLink to="/contact" class="cyber-button px-12 py-4 text-lg">
            Initialize Contact
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page component
</script>