<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  useServerSeoMeta({
    robots: 'index, follow',
    title: 'Bruno Carsten de Araújo',
    ogTitle: 'Bruno Carsten de Araújo',
    description: 'Bruno é um desenvolvedor de software que cria produtos acessiveis e experiências digitais na web.',
    ogDescription: 'Bruno é um desenvolvedor de software que cria produtos acessiveis e experiências digitais na web.',
    ogImage: '/__og-image__/image/og.png'
  })
</script>
