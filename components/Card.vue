<script lang="ts" setup>
  defineProps<{
    title: string
    text: string
    tags: string[]
    date: string[]
    url?: string
  }>()
</script>

<template>
  <li class="mb-12">
    <div
      :class="`${
        url ? 'cursor-pointer' : ''
      } group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50`"
    >
      <div
        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
      ></div>
      <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {{ date[0] }} - {{ date[1] }}
      </header>
      <div class="z-10 sm:col-span-6">
        <h3 class="font-medium leading-snug text-slate-200">
          <div>
            <NuxtLink
              :aria-label="title"
              rel="noreferrer noopener"
              :to="url"
              target="_blank"
              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            >
              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
              </span>
              <span>
                {{ title }}
              </span>
            </NuxtLink>
          </div>
        </h3>
        <p class="mt-2 text-sm leading-normal">
          {{ text }}
        </p>
        <ul class="mt-2 flex flex-wrap">
          <Tag v-for="(text, i) in tags" :text="text" :key="i" />
        </ul>
      </div>
    </div>
  </li>
</template>
