<script lang="ts" setup>
  const props = defineProps<{
    id: string
    ariaLabel: string
  }>()

  const emit = defineEmits(['update:isVisible'])
</script>

<template>
  <section v-visible :id="id" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" :aria-label="ariaLabel">
    <slot />
  </section>
</template>
