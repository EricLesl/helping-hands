<script setup>
import { reactive, ref } from 'vue'
import { PHONE_DISPLAY, PHONE_LINK, buildMailto } from '../contact.js'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  forWho: 'Myself',
  community: 'Grand Bend',
  services: [],
  visitType: 'One-time visit',
  days: [],
  timeOfDay: 'Either',
  start: '',
  notes: '',
})

const serviceOptions = [
  'Companionship',
  'Grocery & errands',
  'Light housekeeping',
  'Meal preparation',
  'Technology help',
]
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const timeOptions = ['Morning', 'Afternoon', 'Either']

const sent = ref(false)
const error = ref('')

function submit() {
  error.value = ''
  if (!form.name.trim() || !form.phone.trim()) {
    error.value = 'Please fill in your name and phone number so Miranda can call you back.'
    return
  }
  const lines = [
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.email.trim() ? `Email: ${form.email.trim()}` : '',
    `Visits are for: ${form.forWho}`,
    `Community: ${form.community}`,
    form.services.length ? `Help needed: ${form.services.join(', ')}` : '',
    `Visit type: ${form.visitType}`,
    form.days.length ? `Preferred days: ${form.days.join(', ')}` : '',
    `Preferred time of day: ${form.timeOfDay}`,
    form.start.trim() ? `Would like to start: ${form.start.trim()}` : '',
    form.notes.trim() ? `Anything Miranda should know: ${form.notes.trim()}` : '',
  ]
  window.location.href = buildMailto(`Visit request - ${form.name.trim()}`, lines)
  sent.value = true
}
</script>

<template>
  <section id="request" class="section">
    <div class="section-head" v-reveal>
      <span class="script-accent">say hello</span>
      <h2>Request a visit</h2>
      <p>
        Fill this in and it will open an email to Miranda with everything she needs. Or just
        call or text
        <a :href="PHONE_LINK">{{ PHONE_DISPLAY }}</a> - whichever is easier.
      </p>
    </div>
    <div class="form-box" v-reveal>
      <h3>Visit request</h3>
      <form @submit.prevent="submit" novalidate>
        <div class="two-col">
          <div>
            <label for="vr-name">Your name *</label>
            <input id="vr-name" v-model="form.name" type="text" autocomplete="name" required />
          </div>
          <div>
            <label for="vr-phone">Phone number *</label>
            <input id="vr-phone" v-model="form.phone" type="tel" autocomplete="tel" required />
          </div>
        </div>
        <label for="vr-email">Email <span class="optional">(optional)</span></label>
        <input id="vr-email" v-model="form.email" type="email" autocomplete="email" />
        <div class="two-col">
          <div>
            <label for="vr-for">Who are the visits for?</label>
            <select id="vr-for" v-model="form.forWho">
              <option>Myself</option>
              <option>A parent</option>
              <option>Another family member</option>
              <option>Someone else</option>
            </select>
          </div>
          <div>
            <label for="vr-community">Community</label>
            <select id="vr-community" v-model="form.community">
              <option>Grand Bend</option>
              <option>Port Franks</option>
              <option>Thedford</option>
              <option>Exeter</option>
              <option>Other nearby area</option>
            </select>
          </div>
        </div>
        <label>What kind of help is needed? <span class="optional">(tick all that apply)</span></label>
        <div class="check-row">
          <label v-for="option in serviceOptions" :key="option">
            <input type="checkbox" :value="option" v-model="form.services" />
            {{ option }}
          </label>
        </div>
        <label>Visit type</label>
        <div class="check-row">
          <label>
            <input type="radio" value="One-time visit" v-model="form.visitType" />
            One-time visit
          </label>
          <label>
            <input type="radio" value="Same time every week" v-model="form.visitType" />
            Same time every week
          </label>
          <label>
            <input type="radio" value="Free intro chat first" v-model="form.visitType" />
            Free intro chat first
          </label>
        </div>
        <label>Preferred days <span class="optional">(Monday to Friday)</span></label>
        <div class="check-row">
          <label v-for="day in dayOptions" :key="day">
            <input type="checkbox" :value="day" v-model="form.days" />
            {{ day }}
          </label>
        </div>
        <label>Preferred time of day</label>
        <div class="check-row">
          <label v-for="time in timeOptions" :key="time">
            <input type="radio" :value="time" v-model="form.timeOfDay" />
            {{ time }}
          </label>
        </div>
        <label for="vr-start">When would you like to start?</label>
        <input
          id="vr-start"
          v-model="form.start"
          type="text"
          placeholder="e.g. Next week, as soon as possible"
        />
        <label for="vr-notes">Anything Miranda should know?</label>
        <textarea id="vr-notes" v-model="form.notes"></textarea>
        <div style="margin-top: 22px">
          <button class="btn" type="submit">Send visit request</button>
        </div>
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <p v-if="sent" class="sent-box">
          Your email app should open with the request ready to send. If it does not open, just
          call or text {{ PHONE_DISPLAY }}.
        </p>
      </form>
      <p class="form-note" style="margin-top: 20px">
        Every request is confirmed by phone before anything is booked. Nothing is scheduled
        automatically.
      </p>
    </div>
  </section>
</template>
