<script lang="ts" setup>
  const props = defineProps<{
    currentItem: string
  }>()

  const navlinks = ref<any>([])
  const options = useState(() => [
    { text: 'Sobre', href: '#about' },
    { text: 'Experiência', href: '#experience' }
  ])

  const handleClick = (el: number) => {
    navlinks.value.forEach((link: any) => link.$el.classList.remove('active'))

    const clickedElement = navlinks.value[el].$el
    clickedElement.classList.toggle('active')
  }

  const setActiveLink = (link: any) => link.$el.classList.toggle('active')

  watch(
    props,
    () => {
      const item = navlinks.value.find((link: any) => link.to === props.currentItem)

      if (item) {
        navlinks.value.forEach((link: any) => link.$el.classList.remove('active'))
        setActiveLink(item)
      }
    },
    { deep: true }
  )
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-slate-200">Bruno Carsten de Araújo</h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Front End Developer</h2>
      <p class="mt-4 max-w-xs leading-normal">Transformo café em código.</p>
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-16 w-max">
          <li v-for="({ text, href }, i) in options" :key="i">
            <NuxtLink
              @click="handleClick(i)"
              :ref="(el) => (navlinks[i] = el)"
              :class="`z-99 group flex items-center py-3 ${i === 0 ? 'active' : ''} `"
              :to="href"
            >
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              >
              </span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
              >
                {{ text }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
