export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('visible', {
    beforeMount(el, binding) {
      const options = binding.value || { threshold: 0.5 }

      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]

        if (entry.isIntersecting) {
          //@ts-ignore
          binding.instance?.$emit('update:isVisible', `#${el.id}`)
          return true
        } else {
          return
        }
      }, options)

      observer.observe(el)

      el._intersectionObserver = observer
    },
    beforeUnmount(el) {
      if (el._intersectionObserver) {
        el._intersectionObserver.disconnect()
        delete el._intersectionObserver
      }
    }
  })
})
