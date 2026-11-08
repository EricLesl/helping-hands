<script setup>
const items = [
  {
    title: 'Request your days',
    text: 'Use the form below to pick your preferred days (Monday to Friday), morning or afternoon, and whether you want a one-time visit or the same time every week.',
  },
  {
    title: 'Confirmed by phone',
    text: 'Miranda calls you back to confirm the time personally. Nothing is booked automatically - every visit is agreed on together first.',
  },
  {
    title: 'Regular visits, same face',
    text: 'Weekly visits happen at your regular time with the same person, so it feels familiar, not like a stranger each week.',
  },
  {
    title: 'Life happens',
    text: 'Need to reschedule? Just call or text as soon as you can and a new time will be found. Flexibility is part of the service.',
  },
]
</script>

<template>
  <section class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">no surprises</span>
      <h2>Scheduling, made easy</h2>
      <p>Visits run Monday to Friday. Here is how scheduling works, so there are no surprises.</p>
    </div>
    <div class="schedule-grid">
      <div v-for="item in items" :key="item.title" class="schedule-card" v-reveal>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>
