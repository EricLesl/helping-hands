<script setup>
const steps = [
  {
    num: '1',
    title: 'Get in touch',
    text: 'Call, text, email, or fill in the request form below. Tell us what kind of help is needed and when.',
  },
  {
    num: '2',
    title: 'A friendly intro chat',
    text: 'Miranda will call you back to talk through what is needed, answer questions, and find a time that works. Every visit is confirmed personally - nothing is ever booked without a conversation first.',
  },
  {
    num: '3',
    title: 'Visits on your schedule',
    text: 'One-time visits or the same time every week. Visits are Monday to Friday with flexible scheduling, and a 2 hour minimum per visit.',
  },
]
</script>

<template>
  <section id="how" class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">simple as that</span>
      <h2>How it works</h2>
      <p>No accounts, no apps to learn, no complicated booking system. Just three steps.</p>
    </div>
    <div class="steps">
      <div v-for="step in steps" :key="step.num" class="step" v-reveal>
        <div class="step-num">{{ step.num }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </div>
  </section>
</template>
