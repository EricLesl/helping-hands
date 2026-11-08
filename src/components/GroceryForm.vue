<script setup>
import { reactive, ref } from 'vue'
import { PHONE_DISPLAY, PHONE_LINK, buildMailto } from '../contact.js'

const form = reactive({
  name: '',
  phone: '',
  store: '',
  list: '',
  notes: '',
})

const sent = ref(false)
const error = ref('')

function submit() {
  error.value = ''
  if (!form.name.trim() || !form.phone.trim() || !form.list.trim()) {
    error.value = 'Please fill in your name, phone number, and grocery list.'
    return
  }
  const lines = [
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.store.trim() ? `Preferred store: ${form.store.trim()}` : '',
    '',
    'Grocery list:',
    form.list.trim(),
    '',
    form.notes.trim() ? `Notes: ${form.notes.trim()}` : '',
  ]
  window.location.href = buildMailto(`Grocery list - ${form.name.trim()}`, lines)
  sent.value = true
}
</script>

<template>
  <section id="groceries" class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">shopping, sorted</span>
      <h2>Grocery list</h2>
      <p>
        Already a client, or getting ready for a first visit? Send your grocery list here and
        it gets shopped on the next visit. Purchases are billed at cost and you always get the
        receipt.
      </p>
    </div>
    <div class="form-box" v-reveal>
      <form @submit.prevent="submit" novalidate>
        <div class="two-col">
          <div>
            <label for="gr-name">Your name *</label>
            <input id="gr-name" v-model="form.name" type="text" autocomplete="name" required />
          </div>
          <div>
            <label for="gr-phone">Phone number *</label>
            <input id="gr-phone" v-model="form.phone" type="tel" autocomplete="tel" required />
          </div>
        </div>
        <label for="gr-store">Preferred store <span class="optional">(optional)</span></label>
        <input id="gr-store" v-model="form.store" type="text" placeholder="e.g. Foodland, No Frills" />
        <label for="gr-list">Grocery list *</label>
        <textarea
          id="gr-list"
          v-model="form.list"
          placeholder="One item per line works best"
          required
        ></textarea>
        <label for="gr-notes">Notes <span class="optional">(allergies, substitutions, things to skip)</span></label>
        <textarea id="gr-notes" v-model="form.notes"></textarea>
        <div style="margin-top: 22px">
          <button class="btn" type="submit">Send grocery list</button>
        </div>
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <p v-if="sent" class="sent-box">
          Your email app should open with the list ready to send. If it does not open, just
          call or text {{ PHONE_DISPLAY }}.
        </p>
      </form>
      <p class="form-note" style="margin-top: 20px">
        Prefer to talk it through? Call or text
        <a :href="PHONE_LINK">{{ PHONE_DISPLAY }}</a> any time.
      </p>
    </div>
  </section>
</template>
