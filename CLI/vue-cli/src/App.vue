<template>
  <div id="app">
    <div class="container mt-4">
      <div class="row">
        <persona class="col"></persona>
        <persona class="col"></persona>
      </div>
    </div>
  </div>
</template>

<script>
import persona from './components/Persona.vue'
export default {
  components:{ persona },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
