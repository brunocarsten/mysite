<script setup lang="ts">
  defineProps<{
    text: string
  }>()
</script>

<template>
  <li class="mr-1.5 mt-2">
    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {{ text }}
    </div>
  </li>
</template>
