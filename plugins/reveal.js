export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-visible')
        return
      }

      const modifiers = binding.modifiers || {}

      el.classList.add('reveal-on-scroll')

      if (modifiers.fast) el.classList.add('reveal-fast')
      if (modifiers.delay2) el.classList.add('reveal-delay-2')
      if (modifiers.delay3) el.classList.add('reveal-delay-3')
      if (modifiers.left) el.classList.add('reveal-from-left')
      if (modifiers.right) el.classList.add('reveal-from-right')

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0] || !entries[0].isIntersecting) return

          el.classList.add('is-visible')
          observer.disconnect()
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px 50px 0px',
        }
      )

      observer.observe(el)
      el._revealObserver = observer
    },
    unmounted(el) {
      if (el._revealObserver) {
        el._revealObserver.disconnect()
        delete el._revealObserver
      }
    },
  })
})
