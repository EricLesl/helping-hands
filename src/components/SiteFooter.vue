<script setup>
import { EMAIL, PHONE_DISPLAY, PHONE_LINK } from '../contact.js'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="foot-script">Get in touch</div>
          <h3>The fastest way is a call or text. Email works too, any time.</h3>
          <p>
            <a class="big-phone" :href="PHONE_LINK">{{ PHONE_DISPLAY }}</a>
            <br />
            <span style="color: #b9c8b4">Call or text</span>
          </p>
          <p>
            <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
            <br />
            <span style="color: #b9c8b4">Email anytime</span>
          </p>
        </div>
        <div>
          <h3>Hours &amp; areas</h3>
          <p>Monday to Friday, flexible scheduling</p>
          <p>Grand Bend, Port Franks, Thedford, Exeter and surrounding areas</p>
          <p>Non-medical support only</p>
        </div>
        <div>
          <h3>Helping Hands</h3>
          <p>Senior companion &amp; home support services.</p>
          <p>
            <a href="#services">Services</a> &middot; <a href="#pricing">Pricing</a> &middot;
            <a href="#faq">Questions</a> &middot; <a href="#request">Request a visit</a>
          </p>
        </div>
      </div>
      <div class="foot-bottom">
        &copy; 2026 Helping Hands - Senior companion &amp; home support, Grand Bend, Ontario.
      </div>
    </div>
  </footer>
</template>
