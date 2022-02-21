<template>
    <section>
        <div class="row">
            <div class="col-6">
                <form @submit.prevent="anadirProducto(newProducto)">
                    
                        <div class="form-group ">
                            <label for="Producto">Producto</label>
                            <input type="text" class="form-control" placeholder="Nombre.." v-model="newProducto.nombre">
                            <label for="Precio">Precio</label>
                            <input type="text" class="form-control" placeholder="Precio.."  v-model="newProducto.precio">
                        </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item p-1" v-for="(producto,index) in productos" :key="producto.nombre">
                        <p>{{producto.nombre}}  <strong>{{producto.precio}}$</strong> 
                        <button class="btn btn-small btn-info" @click="comprarProducto(index)" >+</button></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return{
            newProducto:{
                nombre:'',
                precio:''
            }
        }
    },
    methods:{
        //...mapMutations(['anadirProducto'])
        ...mapMutations(['comprarProducto']),
        anadirProducto(newProducto){
            this.$store.commit('anadirProducto',newProducto)
            this.newProducto={}
        }
    },
    computed: {
        ...mapState(['productos'])
    }
}
</script>
