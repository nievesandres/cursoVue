import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    data:{
        formulario:{
            nombre:null,
            apellido:null,
            consulta:null,
            cliente:null,
            conocio:'Internet',
            acepto:false
        },
        conocio:[
            'Internet',
            'Television',
            'Otrolao'
        ]
    },
    methods:{
        enviar()
        {
            for (let key in this.formulario) {
                console.info(`${key} : ${this.formulario[key]} `);
            }
        }
    }
  })
