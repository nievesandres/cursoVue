<template>
  <div id="app">
    <div class="container mt-5 ">
      
        <productos></productos>
        <hr>
        <carrito></carrito>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'//importamos mapState para usar las propiedades del state de un manera mas directa
import productos from './components/Productos.vue'
import carrito from './components/Carrito.vue'
export default {
  components:{productos,carrito},
  name: 'app',
  data () {
    return {
     
    }
  },
  computed:mapState(['nombre'])
}
</script>
