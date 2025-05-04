<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'accent', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => 'submit' | 'reset' | 'button',
    default: 'button'
  },
  to: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[
      'inline-block text-center transition duration-300 font-bold rounded-md',
      {
        'bg-primary hover:bg-primary-dark text-white': variant === 'primary',
        'bg-secondary hover:bg-secondary-dark text-white': variant === 'secondary',
        'bg-accent hover:bg-accent-dark text-white': variant === 'accent',
        'bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white hover:border-transparent': variant === 'outline',
        'text-accent hover:text-accent-dark': variant === 'text',
        'py-1 px-3 text-sm': size === 'sm',
        'py-2 px-4': size === 'md',
        'py-3 px-6 text-lg': size === 'lg',
        'opacity-50 cursor-not-allowed': disabled
      }
    ]">
    <slot></slot>
  </RouterLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[
      'transition duration-300 font-bold rounded-md',
      {
        'bg-primary hover:bg-primary-dark text-white': variant === 'primary',
        'bg-secondary hover:bg-secondary-dark text-white': variant === 'secondary',
        'bg-accent hover:bg-accent-dark text-white': variant === 'accent',
        'bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white hover:border-transparent': variant === 'outline',
        'text-accent hover:text-accent-dark': variant === 'text',
        'py-1 px-3 text-sm': size === 'sm',
        'py-2 px-4': size === 'md',
        'py-3 px-6 text-lg': size === 'lg',
        'opacity-50 cursor-not-allowed': disabled
      }
    ]">
    <slot></slot>
  </button>
</template>