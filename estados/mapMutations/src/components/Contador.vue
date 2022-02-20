<template>
    <div class="container mt-4">
        <h1>{{cantidad}}</h1>
        <hr>
        <button class="btn btn-danger" @click="reducir">-</button>
        <button class="btn btn-success" @click="aumentar">+</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: mapState(['cantidad']),
    methods: mapMutations(['aumentar','reducir'])
}
</script>