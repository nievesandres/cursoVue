<template>
    <div>
        <div v-if="persona" class="card" style="width: 18rem;">
            <img :src="datosPersona.img" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title" v-text="datosPersona.nombre"></h5>
                <p class="card-text" v-text="datosPersona.correo"></p>
                <a href="#" class="btn btn-primary">Go</a>
            </div>
        </div>
        <div v-else>
            <h3>Cargando....</h3>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data() {
        return{
            persona:null
        }
    },
    mounted(){
        axios.get('https://randomuser.me/api/')
        .then((response)=>{
           this.persona = response.data.results[0];
        })
    },
    computed:{
        datosPersona(){
            return{
                nombre: this.persona.name.first,
                correo: this.persona.email,
                img:this.persona.picture.large
            }
        }
    }
    
}
</script>
