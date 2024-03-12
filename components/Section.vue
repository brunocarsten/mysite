<script lang="ts" setup>
  const props = defineProps<{
    id: string
    ariaLabel: string
  }>()

  const emit = defineEmits(['update:isVisible'])

  const target = ref()

  onMounted(() => {
    let observer
    console.log()
    observer = new IntersectionObserver(callback, {
      threshold: 0.7
    })
    observer.observe(target.value)
  })

  const callback = () => {
    emit('update:isVisible', `#${props.id}`)
  }
</script>

<template>
  <section ref="target" :id="id" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" :aria-label="ariaLabel">
    <slot />
  </section>
</template>
