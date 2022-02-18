Vue.component('contenedor',{
	template:'#contenedor',
	data() {	
		return {
			contactos: [
				{nombre:'pablo',telefono:'041212346578',texto:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
				//{nombre:'maria',telefono:'042465478988',texto:'Simply dummy text of the printing and typesetting industry dummy text of the printing.'},
				//{nombre:'ramon',telefono:'041212346572',texto:'typesetting industry dummy text of the printing Lorem Ipsum is simply dummy text of the printing.'}
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
