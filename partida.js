/* Objeto partida for
* [[ Explicación ]]
*/

var objPartida = function() {

}

/* Hay que deciridri como se guarda los segumientos de los ataques a fichas. Hay que guardar:
	- ID de la ficha que ataca
	- ID de la casilla que ataca
	- ID de la casilla a la que se ataca
*/
objPartida.prototype.seguimientoAtaq = new Array();

// Array que contiene las fichas de la partida, la key es el valor de la ficha del color + ficha
objPartida.prototype.fichas = new Array();


// Instanciamos el tablero dentro de la partida
objPartida.prototype.tablero = new objTablero();


objPartida.prototype.iniciar = function() {
	this.tablero.generarCasillas();
	if(this.tablero.estaGenerado()) {
		this.generarFichas();
	}
}

objPartida.prototype.addSegAtaq = function(casillaAtaq, casillaDef, fichaAtaq) {
	fichaAtaq = fichaAtaq.id || casillaAtaq.ficha.id;

	var temArray = new Array;
		this.temArray['idCA'] = casillaAtaq.id;
		this.temArray['idCD'] = casillaDef.id;
		this.temArray['idF'] = casillaAtaq.ficha.id

	this.seguimientoAtaq.push(temArray);
}

objPartida.prototype.removeSegAtaq = function(casillaAtaq, fichaAtaq) {
	fichaAtaq = fichaAtaq.id || casillaAtaq.ficha.id;
}

objPartida.prototype.getSegAtaq = function(casillaAtaq, fichaAtaq) {
	fichaAtaq = fichaAtaq.id || casillaAtaq.ficha.id;
}

objPartida.prototype.nuevaPartida = function() {}

objPartida.prototype.generarFichas = function() {
	if(!this.tablero || !FICHAS_DE_PARTIDA) return;

	// Generamos todas las fichas

	
	for(i=1; i<EQUIPOS.length; i++) {
		for(j=0; j<FICHAS_DE_PARTIDA.length; j++) {

			switch(FICHAS_DE_PARTIDA[j]) {

				case "torre":
					this.fichas[i+''+j] = new objTorre();
					break;
				case "alfil":
					this.fichas[i+''+j] = new objAlfil();
					break;
				case "caballo":
					this.fichas[i+''+j] = new objCaballo();
					break;
				case "reina":
					this.fichas[i+''+j] = new objReina();
					break;
				case "rey":
					this.fichas[i+''+j] = new objRey();
					break;
				case "peon":
					this.fichas[i+''+j] = new objPeon();
					break;
				default:
					console.log("Ficha no encontrada");

			}
		}
	}

}
