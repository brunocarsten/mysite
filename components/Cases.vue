<template>
  <Section
    @update:isVisible="currentItem = $event"
    id="cases"
    ariaLabel="Cases"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
      >
        Cases
      </h2>
    </div>

    <div class="space-y-12">
      <div
        v-for="(case_, index) in cases"
        :key="index"
        class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      >
        <div
          class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
        ></div>

        <div class="z-10 sm:col-span-6">
          <h3 class="font-medium leading-snug text-slate-200">
            <div>
              <NuxtLink
                :to="case_.url"
                target="_blank"
                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                :aria-label="`${case_.title} (abre em nova aba)`"
              >
                <span
                  class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                ></span>
                <span>
                  {{ case_.title }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </NuxtLink>
            </div>
          </h3>

          <p class="mt-2 text-sm leading-normal text-slate-400">
            {{ case_.description }}
          </p>

          <div class="mt-3">
            <h4
              class="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2"
            >
              Principais resultados:
            </h4>
            <ul class="text-xs text-slate-400 space-y-1">
              <li
                v-for="highlight in case_.highlights"
                :key="highlight"
                class="flex items-start"
              >
                <span class="text-teal-300 mr-2">•</span>
                {{ highlight }}
              </li>
            </ul>
          </div>

          <ul class="mt-4 flex flex-wrap" aria-label="Tecnologias utilizadas">
            <li
              v-for="tech in case_.technologies"
              :key="tech"
              class="mr-1.5 mt-2"
            >
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
              >
                {{ tech }}
              </div>
            </li>
          </ul>
        </div>

        <div class="z-10 sm:col-span-2 sm:order-first">
          <img
            :src="case_.image"
            :alt="`Preview do projeto ${case_.title}`"
            class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
const currentItem = ref<string>("")

const cases = ref([
  {
    title: "Sistema de Gestão de Leads",
    description:
      "Plataforma completa para gestão de leads e funil de vendas com dashboard em tempo real, automação de marketing e integração com CRM.",
    technologies: ["Vue 3", "Nuxt 3", "Node.js", "MongoDB", "Docker"],
    highlights: [
      "Aumento de 45% na conversão de leads",
      "Dashboard em tempo real com WebSocket",
      "Integração com múltiplas APIs",
    ],
    image: "/images/case-leads.jpg", // Adicione a imagem correspondente
    url: "https://exemplo.com",
  },
  {
    title: "E-commerce B2B",
    description:
      "Marketplace B2B com sistema de cotações, gestão de pedidos em lote e portal do fornecedor integrado.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Kubernetes",
    ],
    highlights: [
      "Processamento de 10k+ pedidos/mês",
      "Sistema de cotações automatizado",
      "Portal self-service para fornecedores",
    ],
    image: "/images/case-ecommerce.jpg",
    url: "https://exemplo.com",
  },
  {
    title: "App de Comunicação Interna",
    description:
      "Aplicação para comunicação corporativa com chat em tempo real, sistema de notificações e módulo de enquetes.",
    technologies: ["Vue 2", "Laravel", "Socket.io", "Redis", "MySQL"],
    highlights: [
      "Chat em tempo real para 500+ usuários",
      "Sistema de notificações push",
      "Módulo de enquetes e feedback",
    ],
    image: "/images/case-comunicacao.jpg",
    url: "https://guiafacil.com",
  },
])
</script>
