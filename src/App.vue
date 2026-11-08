<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingSection from './components/PricingSection.vue'
import SchedulingSection from './components/SchedulingSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import VisitForm from './components/VisitForm.vue'
import GroceryForm from './components/GroceryForm.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main id="top" class="wrap">
    <HeroSection />
    <ServicesSection />
    <HowItWorks />
    <PricingSection />
    <SchedulingSection />
    <AboutSection />
    <FaqSection />
    <VisitForm />
    <GroceryForm />
  </main>
  <SiteFooter />
</template>
