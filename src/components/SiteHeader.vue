<script setup>
import { ref } from 'vue'
import { PHONE_DISPLAY, PHONE_LINK } from '../contact.js'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="nav">
      <a class="logo" href="#top" @click="closeMenu">Helping<span class="script-word">Hands</span></a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#faq">Questions</a>
      </nav>
      <div class="nav-cta">
        <a class="btn small" :href="PHONE_LINK">Call {{ PHONE_DISPLAY }}</a>
        <button
          class="hamburger"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>
    <nav class="mobile-menu" :class="{ open: menuOpen }" aria-label="Mobile navigation">
      <a href="#services" @click="closeMenu">Services</a>
      <a href="#how" @click="closeMenu">How it works</a>
      <a href="#pricing" @click="closeMenu">Pricing</a>
      <a href="#about" @click="closeMenu">About</a>
      <a href="#faq" @click="closeMenu">Questions</a>
      <a href="#request" @click="closeMenu">Request a visit</a>
      <a class="btn" :href="PHONE_LINK">Call {{ PHONE_DISPLAY }}</a>
    </nav>
  </header>
</template>
