<template>
    <div class="container">
        <tareasCompletadas></tareasCompletadas>
        <hr>
        <ul class="mt-5">
            <li v-for="tarea in listadeTareas" :key="tarea.titulo" @click="tarea.completado=true"><a href="#">{{tarea.titulo}}</a></li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import tareasCompletadas from './TareasCompletas.vue';
export default {
    components: {tareasCompletadas},
    computed: mapGetters(['listadeTareas'])
}
</script>