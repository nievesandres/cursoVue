<template>
  <div id="app">
      <h1>Hola mi nombre es  {{nombre}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'//importamos mapState para usar las propiedades del state de un manera mas directa
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  computed:mapState(['nombre'])
}
</script>
