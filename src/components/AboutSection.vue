<script setup>
import mirandaPhoto from '../assets/miranda.jpg'

const areas = ['Grand Bend', 'Port Franks', 'Thedford', 'Exeter']
</script>

<template>
  <section id="about" class="section">
    <div class="about">
      <div v-reveal>
        <img
          class="about-photo"
          :src="mirandaPhoto"
          alt="Miranda, owner of Helping Hands"
          width="360"
          height="378"
          loading="lazy"
        />
      </div>
      <div v-reveal>
        <span class="script-accent">nice to meet you</span>
        <h2>Hi, I am Miranda.</h2>
        <p>
          Helping Hands was started to give seniors in Grand Bend and the surrounding
          communities a friendly, reliable person they can count on - for conversation, for
          everyday errands, and for the little things that make a house feel like home.
        </p>
        <p>
          Support here is non-medical. That means companionship, housekeeping, meals, errands
          and tech help - not nursing care or medication management. If medical care is ever
          needed, Miranda will always say so honestly and help point you in the right direction.
        </p>
        <h3>Serving Grand Bend &amp; surrounding areas</h3>
        <div class="area-chips">
          <span
            v-for="(area, i) in areas"
            :key="area"
            class="area-chip"
            :class="{ 'blush-bg': i % 2 === 1 }"
          >
            {{ area }}
          </span>
          <span class="area-chip">and surrounding areas</span>
        </div>
        <p>If you are nearby and not sure, just ask.</p>
      </div>
    </div>
  </section>
</template>
