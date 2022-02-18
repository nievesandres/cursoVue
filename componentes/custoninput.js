Vue.component('contrasena',{
    props:['contrasena'],
    template:'<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">',
    methods:{
        comprobarContrasena(contrasena){
            if(this.noVlida.includes(contrasena)){
                this.$refs.pass.value = contrasena = ''
            }
            this.$emit('input',contrasena)
        }
    },
    data(){
        return{
           noVlida: ['abcde','123456','admin','root']
        }
    }
})


new Vue({
    el:'main',
    data:{
        contrasena:'MWv!9bqk0Jo6'
    }
})