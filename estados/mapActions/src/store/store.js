import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        cantidad:0
    },
    mutations:{
        aumentar: (state,cantidad) => state.cantidad+=cantidad,
        reducir: (state,cantidad) => state.cantidad-=cantidad
    },
    actions:{
        aumentarAsync: (context,obj) => {
            setTimeout(() => context.commit('aumentar',obj.cantidad),1000);
        },
        reducirAsync: (context,valor) => {
            setTimeout(() => context.commit('reducir',valor),1000);
         }

    }
    
})