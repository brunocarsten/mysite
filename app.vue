<script lang="ts" setup>
  import Header from './components/Header.vue'
</script>

<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <!-- <NuxtWelcome /> -->
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Sobre mim">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
          >
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
          </div>
          <div>
            <p class="mb-4">
              Sempre fui um entusiasta de tecnologia. Quando criança, gostava de desmontar meus video games e montá-los
              novamente, só para ver o que havia dentro. A partir disso, por volta de 2010, comecei a demonstrar
              interesse por programação. No primeiro ano do ensino médio, iniciei o curso técnico em informática, onde
              fui introduzido aos conceitos básicos da computação: lógica de programação, algoritmos, arquitetura de
              computadores, sistemas operacionais, redes, entre outros...
            </p>
            <p class="mb-4">
              Atualmente, meu objetivo é desenvolver interfaces acessíveis e intuitivas para os clientes da
              <NuxtLink
                class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                to="https://guiafacil.com"
                target="_blank"
              >
                Guia Fácil Comunicação.
              </NuxtLink>
              Tenho o interesse em manter-me atualizado com as novas tecnologias e tendências do mercado, estabelecendo
              um paralelo entre a evolução tecnológica e as reais necessidades do negócio. Busco identificar quais
              tecnologias atenderão de forma mais eficiente à demanda, considerando sempre a eficácia em atender às
              necessidades específicas da empresa.
            </p>
            <p>
              Quando não estou diante de um computador, geralmente estou com minha esposa, minha família ou amigos. Ou
              então, em algumas horas de lazer, me aventuro caçando algumas feras em Yharnam.
            </p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
