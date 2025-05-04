<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '../../store/content'
import type { Course } from '../../store/content'

const route = useRoute()
const contentStore = useContentStore()
const course = ref<Course | null>(null)

onMounted(async () => {
  if (route.params.id) {
    course.value = await contentStore.fetchCourse(route.params.id as string)
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="contentStore.loading" class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
    </div>

    <div v-else-if="course" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <img
          :src="course.image || '/placeholder-course.jpg'"
          :alt="course.title"
          class="w-full h-64 object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div class="p-6">
            <h1 class="text-3xl font-bold text-white">{{ course.title }}</h1>
          </div>
        </div>
      </div>

      <div class="p-6 space-y-6">
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <div class="flex items-center">
            <span class="material-icons mr-1">schedule</span>
            <span>{{ course.duration }}</span>
          </div>
          <div class="flex items-center">
            <span class="material-icons mr-1">school</span>
            <span>{{ course.level }}</span>
          </div>
          <div class="flex items-center">
            <span class="material-icons mr-1">payments</span>
            <span>₹{{ course.price }}</span>
          </div>
        </div>

        <div class="prose max-w-none">
          <p class="text-gray-600">{{ course.description }}</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">Course Topics</h2>
          <ul class="space-y-2">
            <li
              v-for="topic in course.topics"
              :key="topic"
              class="flex items-center text-gray-600"
            >
              <span class="material-icons text-accent mr-2">check_circle</span>
              {{ topic }}
            </li>
          </ul>
        </div>

        <div class="flex justify-center pt-6">
          <button
            class="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="contentStore.error" class="text-center text-red-600">
      {{ contentStore.error }}
    </div>

    <div v-else class="text-center text-gray-600">
      Course not found
    </div>
  </div>
</template>