<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '../../store/content'
import type { BlogPost } from '../../store/content'

const route = useRoute()
const contentStore = useContentStore()
const post = ref<BlogPost | null>(null)

onMounted(async () => {
  if (route.params.id) {
    const posts = await contentStore.fetchBlogPosts()
    if (Array.isArray(posts) && posts.length > 0) {
      post.value = posts.find((p: BlogPost) => p.id === route.params.id)
    }
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="contentStore.loading" class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
    </div>

    <article v-else-if="post" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        :src="post.image || '/placeholder-blog.jpg'"
        :alt="post.title"
        class="w-full h-64 object-cover"
      >

      <div class="p-8 space-y-6">
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <div class="flex items-center">
            <span class="material-icons mr-1">calendar_today</span>
            <span>{{ new Date(post.date).toLocaleDateString() }}</span>
          </div>
          <div class="flex items-center">
            <span class="material-icons mr-1">person</span>
            <span>{{ post.author }}</span>
          </div>
        </div>

        <h1 class="text-4xl font-bold text-gray-900">{{ post.title }}</h1>

        <div class="flex items-center space-x-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <div class="prose max-w-none">
          <p class="text-gray-600 whitespace-pre-line">{{ post.content }}</p>
        </div>
      </div>
    </article>

    <div v-else-if="contentStore.error" class="text-center text-red-600">
      {{ contentStore.error }}
    </div>

    <div v-else class="text-center text-gray-600">
      Blog post not found
    </div>
  </div>
</template>