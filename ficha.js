/*
* Objeto Ficha
* Define la clase general ficha con sus atributos de equipo, posicion, tipo, etc. En las clases hederadas se establecerán las propiedades especificas para cada ficha.

Lista de IDs de fichassi empieza por 1 Blanca, por 2 Negra
	0 - Torre izquierda
	1 - Caballo izquierdo
	2 - Alfil izquierdo
	3 - Reina
	4 - Rey
	5 - Alfil derecho
	6 - Caballo derecho
	7 - Torre derecha

Ejemplo: ALfil blanco izquierdo id = 12

*/

var objFicha = {
	equipo: 0,
	ficha: -1,
	constructor: function(equipo, ficha) {
		this.equipo = equipo; // 1 Blanca, 2 Negra
		this.numFicha = ficha;
		this.esPrimerMovimiento = true; 
	}, 
	id: null,
	position: null,
	muerta: false,
	setTipoFicha: function(tipo){
		
	},
	morir: function(asesina) {
		// Este metodo hay que re-progamarlo
		if(asesina.puedeMover(asesina.position, this.position)) {
			this.muerta = true;
			this.position = null;
		}
	},
	getTipoFicha: function() {
		if(this.type) return this.type;
		
	},
	seguimientoDeMovimiento: function(arrayDeSeguimiento, valSeguimiento) {
		// Mirar si el in_array estña bien formado
		if(!in_array(arrayDeSeguimiento, valSeguimiento)) {
			return arrayDeSeguimiento.push(valSeguimiento);
		}
	},

	esMismoEquipo: function(ficha) {
		return this.equipo === ficha.equipo;
	},

	esEquipoContrario: function(ficha) {
		return this.equipo !== ficha.equipo;
	},

	puedeMover: function(posicionDestino) {
		if (!this.position) return false;
	}
};