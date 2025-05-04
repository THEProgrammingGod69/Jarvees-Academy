<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'hover', 'feature'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="[
    'bg-white rounded-lg shadow-md overflow-hidden p-6',
    {
      'transition-transform duration-300 hover:transform hover:scale-105': variant === 'hover',
      'border-l-4 border-accent': variant === 'feature'
    }
  ]">
    <h3 v-if="title" class="text-xl font-bold text-primary mb-2">{{ title }}</h3>
    <p v-if="subtitle" class="text-gray-500 mb-4">{{ subtitle }}</p>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>