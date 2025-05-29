<script lang="ts" setup>
const currentItem = ref<string>("")

const data = ref([
  {
    title: "PO - Guia Fácil Comunicação",
    text: "Responsável por priorização de backlog, definição de requisitos e alinhamento entre times técnicos e áreas de negócio. Atuação em discovery de produto, validação de hipóteses e acompanhamento de métricas de performance. Tradução de demandas estratégicas em soluções escaláveis, com participação ativa em rituais ágeis e decisões de roadmap.",
    tags: [
      "Product Management",
      "Scrum",
      "Agile",
      "UX Strategy",
      "Tech Leadership",
      "Stakeholder Management",
      "OKRs",
    ],
    date: ["2024", "2025"],
    url: "https://guiafacil.com",
  },
  {
    title: "Tech Lead - Guia Fácil Comunicação",
    text: "Liderança técnica e orientação de equipes de desenvolvimento. Proficiência em múltiplas linguagens de programação e frameworks",
    tags: [
      "JavaScript",
      "TypeScript",
      "Vue",
      "React",
      "PHP",
      "Docker",
      "Kubernetes",
      "Nuxt",
      "Next",
      "MongoDB",
    ],
    date: ["2023", "2024"],
    url: "https://guiafacil.com",
  },
  {
    title: "Frontend developer - Guia Fácil Comunicação",
    text: "Arquitetura e design de sistemas escaláveis e de alto desempenho. Estabelecimento e implementação de melhores práticas e padrões",
    tags: ["JavaScript", "Vue", "Nuxt", "Docker"],
    date: ["2022", "2023"],
    url: "https://guiafacil.com",
  },
  {
    title: "Fullstack developer - Área Local",
    text: "Arquitetura e design de sistemas escaláveis e de alto desempenho. Estabelecimento e implementação de melhores práticas e padrões",
    tags: ["JavaScript", "PHP", "WordPress"],
    date: ["2018", "2022"],
    url: "https://arealocal.com.br",
  },
  {
    title: "Suporte técnico - Óbus Informática",
    text: "Diagnóstico e reparo de hardware, Solução de problemas em sistemas, hardware e software. Compromisso com a satisfação do cliente.",
    tags: ["PostgreSQL", "Firebird", "Atendimento"],
    date: ["2015", "2018"],
  },
])

defineOgImageComponent("Nuxt", {
  headline: "Senior Front End Developer",
  title: "Bruno Carsten de Araújo",
  description: "Transformo café em código.",
  theme: "#60e6d4",
  colorMode: "dark",
})
</script>

<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header :currentItem="currentItem" />
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <Section
          @update:isVisible="currentItem = $event"
          id="about"
          ariaLabel="Sobre"
        >
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
          >
            <h2
              class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
            >
              Sobre
            </h2>
          </div>
          <div>
            <p class="mb-4">
              Sou desenvolvedor com mais de 6 anos de experiência em projetos
              frontend e fullstack, atuando com foco em performance,
              escalabilidade e entrega de valor. Tenho sólida base técnica em
              tecnologias como Vue.js, React, Node.js, Laravel, Docker e
              Kubernetes, além de experiência com liderança técnica e visão de
              produto.
            </p>
            <p class="mb-4">
              Já atuei em produtos com grande volume de usuários, liderando
              times de desenvolvimento e participando ativamente de decisões
              estratégicas. Tenho perfil híbrido, capaz de transitar entre áreas
              técnicas e de negócio, com boa comunicação e foco em soluções
              eficientes e acessíveis.
            </p>
            <p>
              Atualmente, estou disponível para projetos remotos ou híbridos e
              busco desafios onde possa contribuir com minha experiência e
              continuar evoluindo tecnicamente.
            </p>
          </div>
        </Section>
        <Section
          @update:isVisible="currentItem = $event"
          id="experience"
          ariaLabel="experience"
        >
          <ol class="group/list">
            <Card v-bind="{ ...info }" v-for="(info, i) in data" :key="i" />
          </ol>
          <div class="mt-12">
            <NuxtLink
              target="_blank"
              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
              aria-label="Veja o curriculo completo (Abre em nova aba)"
              to="/resume.pdf"
            >
              <span>
                Veja o currículo
                <span class="inline-block">
                  completo
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
              </span>
            </NuxtLink>
          </div>
        </Section>
        <Footer />
      </main>
    </div>
  </div>
</template>
