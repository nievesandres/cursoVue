<template>
    <div class="container mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>{{cantidad}}</h1>
            </div>
            <div class="card-body">
                <a href="#" @click="disminuir" class="btn btn-warning">-</a>
                <a href="#" @click="aumentar" class="btn btn-info">+</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        aumentar(){
            ++this.$store.state.cantidad;
        },
        disminuir(){
            --this.$store.state.cantidad;
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        cantidad(){
            return this.$store.state.cantidad;
        }
    }
}
</script>
