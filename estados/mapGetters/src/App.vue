<template>
  <div id="app">
      <listatareas></listatareas>
  </div>
</template>

<script>
import {mapState} from 'vuex'//importamos mapState para usar las propiedades del state de un manera mas directa
import Listatareas from './components/Listatareas.vue'
export default {
  components:{Listatareas},
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>
