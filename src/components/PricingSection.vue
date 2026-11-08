<script setup>
const included = [
  'Any mix of the services above within your visit time',
  'Recurring weekly visits at your regular time, or one-time visits',
  'A short update to family after each visit, if you would like one',
  'Grocery and errand purchases at cost, with the receipt always provided',
]
</script>

<template>
  <section id="pricing" class="section">
    <div class="price-box" v-reveal>
      <div>
        <div class="eyebrow" style="color: #f3d9ce">Simple, honest pricing</div>
        <div class="big-num">$30<small>/hour</small></div>
        <h3>2 hour minimum booking - $60 per visit</h3>
        <p>
          Monday to Friday, with flexible scheduling to fit your week. There are no surprise
          fees. If a visit runs longer than planned, that is agreed on together first.
        </p>
        <p>Payment details are confirmed when you book. Just ask if you have questions.</p>
      </div>
      <div>
        <h3>What is included</h3>
        <ul class="check-list">
          <li v-for="item in included" :key="item">
            <svg viewBox="0 0 24 24">
              <polyline points="4 12.5 9.5 18 20 6.5" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
