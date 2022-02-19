Vue.component('usuarios-template',{
    template:'#usuarios-template',
    data(){
        return{
            usuarios:[],
            busqueda:''
        }
    },
    mounted(){
        axios.get('https://randomuser.me/api/?results=5')
        .then(response=>{
         const result = response.data.results.map((usuario)=>{
             return {
                 nombre:`${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                 correo: usuario.email,
                 imagen: usuario.picture.large
             }
         });
         this.usuarios = result;
        })
    },
    computed:{
        filtarUsuarios(){
            console.clear()
            let resultado;
            //filter retorna un array con todos los elementos que coincidan con la condicion
            return this.usuarios.filter((usuario) => {
                //por cada caracter que conincida con el nombre iterado
                // devolvera true y se unira al array retornado
                 resultado = usuario.nombre.includes(this.busqueda)
                 //la funcion includes es sensible a mayusculas y minusculas
                 console.log(usuario.nombre)
                 return resultado
            })
            
        }
    }
})

Vue.component('usuario',{
    props:['datos'],
    template:'#usuario'
})


new Vue({
    el:'main',
    methods:{
        obtenerUsuarios(){

        }
    }
})