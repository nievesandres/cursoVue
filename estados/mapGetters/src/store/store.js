import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        listaTareas:[
            {titulo:'Crear plantilla',completado:false},
            {titulo:'Crear estilos',completado:false},
            {titulo:'Crear maqueta',completado:false},
            {titulo:'Dividir componentes',completado:false},
            {titulo:'Hechar codigo',completado:false}
        ]
    },
    getters:{
        listadeTareas: state =>{
            return state.listaTareas.filter(tarea => !tarea.completado)
            
        },
        tareasCompletadas: state =>{
            return state.listaTareas.filter(tarea => tarea.completado).length
        }
    }
})