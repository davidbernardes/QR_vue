<template>
  <main data-theme="light" class="container">
    <QR/>
    <p><a href="https://www.flaticon.com/free-icons/qr-scan" title="qr scan icons">Qr scan icons created by Yogi Aprelliyanto - Flaticon</a></p>
  </main>
</template>

<script>
import QR from './components/qr.vue'

export default {
  name: 'App',
  components: {
    QR
  }
}
</script>

<style>
@import url('https://unpkg.com/@picocss/pico@latest/css/pico.min.css');
main{
  margin-top: 200px;
  max-width: 1200px;
}
</style>
