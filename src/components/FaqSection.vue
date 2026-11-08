<script setup>
const faqs = [
  {
    q: 'Is this medical care?',
    a: 'No. Helping Hands provides non-medical support only: companionship, housekeeping, meals, errands and tech help. It is not nursing care, and does not include administering medication or medical tasks.',
  },
  {
    q: 'How much does a visit cost?',
    a: '$30 per hour with a 2 hour minimum, so $60 per visit. Grocery and errand purchases are billed at cost, and you always get the receipt.',
  },
  {
    q: 'How do I book?',
    a: 'Call or text (548) 888-9570, email helpinghands.miranda@gmail.com, or fill in the request form below. Miranda will call you back to confirm a time. Nothing is booked without a conversation first.',
  },
  {
    q: 'Can I get the same time every week?',
    a: 'Yes. Most clients have a regular weekly time, which means the same familiar face on the same day each week. One-time visits are welcome too.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'Just call or text as soon as you can and a new time will be arranged. Flexibility is part of the service.',
  },
  {
    q: 'Can family members be kept in the loop?',
    a: 'Yes. With your permission, Miranda can send a short update to family after each visit, so loved ones living farther away know how things are going.',
  },
  {
    q: 'Do you drive clients to appointments?',
    a: 'Errand help includes pickups and everyday outings. If you have a specific trip in mind, mention it when you book and it can be arranged.',
  },
]
</script>

<template>
  <section id="faq" class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">good to know</span>
      <h2>Common questions</h2>
    </div>
    <div class="faq-list" v-reveal>
      <details v-for="faq in faqs" :key="faq.q">
        <summary>{{ faq.q }}</summary>
        <p>{{ faq.a }}</p>
      </details>
    </div>
  </section>
</template>
