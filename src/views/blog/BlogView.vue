<script setup lang="ts">
import { onMounted } from 'vue'
import { useContentStore } from '../../store/content'

const contentStore = useContentStore()

onMounted(async () => {
  await contentStore.fetchBlogPosts()
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

    <div v-if="contentStore.loading" class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
    </div>

    <div v-else-if="contentStore.blogPosts.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in contentStore.blogPosts"
        :key="post.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <RouterLink :to="`/blog/${post.id}`">
          <img
            :src="post.image || '/placeholder-blog.jpg'"
            :alt="post.title"
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span class="material-icons text-accent mr-1">calendar_today</span>
              {{ new Date(post.date).toLocaleDateString() }}
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h2>
            <p class="text-gray-600 line-clamp-3">{{ post.content }}</p>
            <div class="mt-4 flex items-center space-x-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </RouterLink>
      </article>
    </div>

    <div v-else-if="contentStore.error" class="text-center text-red-600">
      {{ contentStore.error }}
    </div>

    <div v-else class="text-center text-gray-600">
      No blog posts found
    </div>
  </div>
</template>