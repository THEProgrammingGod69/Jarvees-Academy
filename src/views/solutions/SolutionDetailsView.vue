<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '../../store/content'
import type { Solution } from '../../store/content'

const route = useRoute()
const contentStore = useContentStore()
const solution = ref<Solution | null>(null)

onMounted(async () => {
  if (route.params.id) {
    solution.value = await contentStore.fetchSolution(route.params.id as string)
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="contentStore.loading" class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
    </div>

    <div v-else-if="solution" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <img
          :src="solution.image || '/placeholder-solution.jpg'"
          :alt="solution.title"
          class="w-full h-64 object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div class="p-6">
            <h1 class="text-3xl font-bold text-white">{{ solution.title }}</h1>
          </div>
        </div>
      </div>

      <div class="p-6 space-y-6">
        <div class="prose max-w-none">
          <p class="text-gray-600">{{ solution.description }}</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">Key Features</h2>
          <ul class="space-y-2">
            <li
              v-for="feature in solution.features"
              :key="feature"
              class="flex items-center text-gray-600"
            >
              <span class="material-icons text-accent mr-2">check_circle</span>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">Benefits</h2>
          <ul class="space-y-2">
            <li
              v-for="benefit in solution.benefits"
              :key="benefit"
              class="flex items-center text-gray-600"
            >
              <span class="material-icons text-accent mr-2">stars</span>
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="flex justify-center pt-6">
          <button
            class="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="contentStore.error" class="text-center text-red-600">
      {{ contentStore.error }}
    </div>

    <div v-else class="text-center text-gray-600">
      Solution not found
    </div>
  </div>
</template>