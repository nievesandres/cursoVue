const eventBus = new Vue();
Vue.component('product-list',{
    props:['listaproductos'],
	template:` 
        <ul class="list-group col-4">
            <li v-for="producto in listaproductos" class="list-group-item row">
                
                {{producto.nombre}} -<strong>{{producto.precio}}</strong>
                    <button class="btn btn-small btn-success" @click="anadirProducto(producto.precio)">+</button>
                    <button class="btn btn-small btn-danger" @click="quitarProducto(producto.precio)">-</button>
                    ----------
                    <button class="btn btn-small btn-danger" @click="eliminarProducto(producto.nombre)">Quitar</button>
            </li>
        </ul>`,
	data() {	
		return {
			contactosTrabajo: [
				{nombre:'predro',telefono:'041212346578'},
				{nombre:'roberto',telefono:'042465478988'},
				{nombre:'nebrazkja',telefono:'041212346572'}
			],
		}
	},
    methods:{
        anadirProducto(precio){
            eventBus.$emit('anadir',precio)
        },
        quitarProducto(precio){
            eventBus.$emit('quitar',precio)//uso el eventBus como puente entre las instancias de los componentes hermanos
        },
        eliminarProducto(producto){
            this.$emit('eliminar',producto)//de esta forma emito un evento para capturarlo en la instancia principal
        }
    }	
});

Vue.component('carrito',{
    props:['listaproductos'],
	template:`<div class="col-6 py-3"> 
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Total: {{preciototal}}$</h5>
                        <h6 class="card-subtitle mb-2 text-muted">N° productos: {{nproductos}}</h6>
                    </div>
                </div>
              </div>`,
	data() {	
		return {
            preciototal:0,
            nproductos:0,
			contactosTrabajo: [
				{nombre:'predro',telefono:'041212346578'},
				{nombre:'roberto',telefono:'042465478988'},
				{nombre:'nebrazkja',telefono:'041212346572'}
			]
		}
	},
    created(){
        eventBus.$on('anadir',(precio)=>{
            this.preciototal+=parseInt(precio); 
            this.nproductos++;
        })
        eventBus.$on('quitar',(precio)=>{
            if(this.preciototal > 0){
                this.preciototal-=parseInt(precio);
                this.nproductos--;
            }
        })
    }	
});

const app = new Vue({
	el:'main',
    data:{
        productos: [
            {nombre:'pelota',precio:'14$'},
            {nombre:'cama',precio:'115$'},
            {nombre:'silla',precio:'22$'}
        ],
        result: []
    },
    methods:{
        eliminarProducto(producto){
           this.result = this.productos.filter(pt=>pt.nombre !== producto)
           this.productos = this.result;
        }
    }
});
