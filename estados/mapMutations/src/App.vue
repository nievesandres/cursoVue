<template>
  <div id="app">
      <contador></contador>
  </div>
</template>

<script>
import {mapState} from 'vuex'//importamos mapState para usar las propiedades del state de un manera mas directa
import contador from './components/Contador.vue'
export default {
  name: 'app',
  components:{contador},
  data () {
    return {
     
    }
  },
  computed:mapState(['nombre'])
}
</script>
