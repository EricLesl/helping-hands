<script setup>
import { PHONE_LINK } from '../contact.js'
import mirandaPhoto from '../assets/miranda.jpg'
</script>

<template>
  <div class="hero">
    <div v-reveal>
      <div class="eyebrow">Senior Companion &amp; Home Support</div>
      <h1>
        Helping
        <span class="script-word">Hands</span>
        with a familiar face.
      </h1>
      <p class="hero-lede">
        Friendly, reliable, non-medical support for seniors in Grand Bend and surrounding
        communities. Companionship, groceries, housekeeping, meal prep, and help with
        technology - from someone you can count on.
      </p>
      <div class="cta-row">
        <a class="btn" href="#request">Request a visit</a>
        <a class="btn blush" :href="PHONE_LINK">Call or text</a>
      </div>
      <div class="trustbar">
        <span class="pill">$30/hour</span>
        <span class="pill blush-bg">2 hour minimum ($60 per visit)</span>
        <span class="pill">Monday - Friday</span>
        <span class="pill blush-bg">Non-medical support only</span>
      </div>
    </div>
    <div class="hero-photo-wrap" v-reveal>
      <img
        class="hero-photo"
        :src="mirandaPhoto"
        alt="Miranda, owner of Helping Hands"
        width="440"
        height="506"
      />
      <div class="hero-caption">Miranda <span>| Owner</span></div>
    </div>
  </div>
</template>
