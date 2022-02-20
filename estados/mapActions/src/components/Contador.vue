<template>
    <div class="container mt-4">
        <h1>{{cantidad}}</h1>
        <hr>
        <button class="btn btn-danger" @click="reducirAsync(15)">-</button>
        <button class="btn btn-success" @click="aumentarAsync({cantidad:12})">+</button>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: mapState(['cantidad']),
    //methods: mapActions(['aumentarAsync','reducirAsync'])
    methods:{
        aumentarAsync(cantidad){
            this.$store.dispatch('aumentarAsync',cantidad)
        },
        reducirAsync(cantidad){
            this.$store.dispatch('reducirAsync',cantidad)
        }
    }
}
</script>