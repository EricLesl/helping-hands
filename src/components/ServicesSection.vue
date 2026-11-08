<script setup>
const services = [
  {
    icon: 'heart',
    title: 'Companionship Visits',
    text: 'Friendly conversation, games, walks, coffee dates and a familiar face. Sometimes the best help is simply good company.',
    tint: 'blush-bg',
  },
  {
    icon: 'cart',
    title: 'Grocery & Errand Help',
    text: 'Shopping, picking up essentials, prescriptions and everyday errands. Use the grocery list form below and it gets done on the next visit.',
    tint: 'sage-bg',
  },
  {
    icon: 'home',
    title: 'Light Housekeeping',
    text: 'Dishes, laundry, tidying, changing sheets and keeping spaces comfortable. Light work that keeps a home feeling like home.',
    tint: 'blush-bg',
  },
  {
    icon: 'meal',
    title: 'Meal Preparation',
    text: 'Simple, nutritious meals and kitchen cleanup. Meals can be prepped for the week so there is always something good in the fridge.',
    tint: 'sage-bg',
  },
  {
    icon: 'tech',
    title: 'Technology Assistance',
    text: 'Help with phones, tablets, video calls and online orders. Patient, one-on-one help at your own pace, no jargon.',
    tint: 'blush-bg',
  },
]
</script>

<template>
  <section id="services" class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">here to help</span>
      <h2>Services I offer</h2>
      <p>Simple, practical help that makes everyday life easier and less lonely.</p>
    </div>
    <div class="cards">
      <article v-for="service in services" :key="service.title" class="card" v-reveal>
        <div class="icon-circle" :class="service.tint">
          <svg v-if="service.icon === 'heart'" viewBox="0 0 24 24">
            <path
              d="M12 21C7 16.5 3 13 3 8.8 3 6 5.2 4 7.8 4c1.7 0 3.2.9 4.2 2.4C13 4.9 14.5 4 16.2 4 18.8 4 21 6 21 8.8 21 13 17 16.5 12 21z"
            />
          </svg>
          <svg v-else-if="service.icon === 'cart'" viewBox="0 0 24 24">
            <path d="M3 4h2l2.4 12.2A2 2 0 0 0 9.4 18h8.2a2 2 0 0 0 2-1.6L21 8H6" />
            <circle cx="10" cy="21" r="1.4" />
            <circle cx="18" cy="21" r="1.4" />
          </svg>
          <svg v-else-if="service.icon === 'home'" viewBox="0 0 24 24">
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5 10.5V20h14v-9.5" />
            <path d="M10 20v-5h4v5" />
          </svg>
          <svg v-else-if="service.icon === 'meal'" viewBox="0 0 24 24">
            <path d="M7 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
            <path d="M9 3v18" />
            <path d="M17 3c-1.5 1.5-2.5 4-2.5 6.5 0 2 1 3.5 2.5 3.5V21" />
          </svg>
          <svg v-else viewBox="0 0 24 24">
            <rect x="7" y="2.5" width="10" height="19" rx="2" />
            <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
          </svg>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </article>
    </div>
  </section>
</template>
