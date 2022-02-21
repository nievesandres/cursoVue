<template>
    <div>
        <h1>Costo final: {{totalCompra}}.00$<h3></h3></h1> <br>
        <ul class="list-group">
            <li v-for="(item,indice) in carro" :key="item.index" class="list-group-item p-1">
                {{item.nombre}} <button class="btn btn-small btn-danger" @click="eliminarProducto(indice)">x</button>
            </li>
        </ul>

    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['carro']),
        ...mapGetters(['totalCompra']),
    },
    methods: mapMutations(['eliminarProducto'])
}
</script>

<style>

</style>