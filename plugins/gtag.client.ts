export default defineNuxtPlugin((nuxt) => {
  const { TAG_MANAGER_ID } = useRuntimeConfig().public
  //@ts-ignore
  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', TAG_MANAGER_ID)
})
