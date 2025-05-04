<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: 'white',
    validator: (value: string) => ['white', 'gray', 'primary', 'accent'].includes(value)
  },
  centered: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section :class="[
    'py-16',
    {
      'bg-white': background === 'white',
      'bg-gray-50': background === 'gray',
      'bg-primary text-white': background === 'primary',
      'bg-accent text-white': background === 'accent'
    }
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title || subtitle" :class="['mb-12', { 'text-center': centered }]">
        <h2 class="text-3xl font-bold mb-4" :class="{
          'text-primary': background === 'white' || background === 'gray',
          'text-white': background === 'primary' || background === 'accent'
        }">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg max-w-3xl" :class="{
          'text-gray-600': background === 'white' || background === 'gray',
          'text-white': background === 'primary' || background === 'accent',
          'mx-auto': centered
        }">{{ subtitle }}</p>
      </div>
      <slot></slot>
    </div>
  </section>
</template>