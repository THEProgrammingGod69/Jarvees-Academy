<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => ['small', 'default', 'large'].includes(value)
  }
});
</script>

<template>
  <section class="bg-primary text-white" :class="{
    'py-10': size === 'small',
    'py-16': size === 'default',
    'py-20': size === 'large'
  }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="{ 'text-center': centered, 'flex flex-col md:flex-row items-center': !centered }">
        <div :class="{ 'md:w-1/2': !centered }">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
          <p v-if="subtitle" class="text-xl" :class="{ 'max-w-3xl mx-auto': centered }">{{ subtitle }}</p>
          <slot name="buttons"></slot>
        </div>
        <div v-if="$slots.image" :class="{ 'md:w-1/2': !centered }">
          <slot name="image"></slot>
        </div>
      </div>
    </div>
  </section>
</template>