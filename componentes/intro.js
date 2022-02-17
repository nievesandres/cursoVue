Vue.component('view-contactos',{
	template:` 
	<div class="container mt-4">
		<div class="accordion" id="accordionExample">
		  <div class="card" v-for="contacto in contactos"> 
		    <div class="card-header" id="headingOne">
		      <h2 class="mb-0">
		        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#'+contacto.nombre" aria-expanded="true" aria-controls="collapseOne">
		          {{contacto.nombre}}
		        </button>
		      </h2>
		    </div>

		    <div :id="contacto.nombre" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
		      <div class="card-body">
		        {{contacto.telefono}}
		      </div>
		    </div>
		  </div>
		</div>
	</div>`,
	data() {	
		return {
			contactos: [
				{nombre:'pablo',telefono:'041212346578'},
				{nombre:'maria',telefono:'042465478988'},
				{nombre:'ramon',telefono:'041212346572'}
			],
			contactosTrabajo: [
				{nombre:'predro',telefono:'041212346578'},
				{nombre:'roberto',telefono:'042465478988'},
				{nombre:'nebrazkja',telefono:'041212346572'}
			]
		}
	}	
});

const app = new Vue({
	el:'main'
});
