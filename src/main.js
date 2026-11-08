import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Gentle fade-up reveal on scroll. Elements with class "reveal" get
// "visible" when they enter the viewport. Respects reduced motion.
app.directive('reveal', {
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            io.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
  },
})

app.mount('#app')
