<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  features: {
    type: Array as () => string[],
    default: () => []
  },
  buttonText: {
    type: String,
    default: 'Learn More'
  },
  buttonLink: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
    <div class="p-6">
      <!-- Icon (if provided) -->
      <div v-if="icon" class="text-accent text-4xl mb-4">
        <slot name="icon">
          <div v-html="icon"></div>
        </slot>
      </div>
      
      <!-- Title and Description -->
      <h3 class="text-xl font-bold text-primary mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      
      <!-- Features List -->
      <ul v-if="features.length > 0" class="space-y-2 mb-6 text-gray-600">
        <li v-for="(feature, index) in features" :key="index">• {{ feature }}</li>
      </ul>
      
      <!-- Custom Content -->
      <slot></slot>
      
      <!-- Button -->
      <RouterLink 
        v-if="buttonLink" 
        :to="buttonLink" 
        class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        {{ buttonText }}
      </RouterLink>
      
      <button 
        v-else-if="buttonText" 
        class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>