/*
* Objeto Tablero
* Genera el tablero de la partida generando todas las casillas y organizándolas
*/

var objTablero = function() {
	var filas = 8, columnas =  8;
	this.arrCasillas = new Array();
	this.esGenerado = false;

	for(i = 0; i < filas; i++) {
		this.arrCasillas[i] = new Array();

		for(j = 0; j < columnas; j++) {
			this.arrCasillas[i][j] = null;
		}
	}

}

objTablero.prototype.arrFichas = {};

objTablero.prototype.generarCasillas = function() {

	// Se generan todos llos objetos de casilla

	for(i=0; i<this.arrCasillas.length; i++) {
		for(j=0; j<this.arrCasillas[i].length; j++) {
			this.arrCasillas[i][j] = new objCasilla(i, j);
		}
	}
	

}
objTablero.prototype.getCasilla = function(x, y){
	if(this.arrCasillas[x][y] instanceof objCasilla)
		return this.arrCasillas[x][y];
	else return null;
}

objTablero.prototype.generarTablero = function(){
	this.generarCasillas();
}

objTablero.prototype.estaGenerado = function() {

	// Comprueba si las casillas se encuentran generadas

	if(this.esGenerado) return true;

	if(this.arrCasillas && this.arrCasillas != undefined && Array.isArray(this.arrCasillas)) {
		if(this.arrCasillas.length != 8) return false;

		var cLenght = this.arrCasillas.length ;

		for(i = 0; i<cLenght; i++) {
			if(!this.arrCasillas[i] || !(this.arrCasillas[i] != undefined) && !Array.isArray(this.arrCasillas[i])) return false;
			if(this.arrCasillas[i].length != 8) return false;
			sLenght = this.arrCasillas[i].length;

			for(j = 0; j<sLenght; j++) {
				if(!this.arrCasillas[i][j] || !(this.arrCasillas[i][j] != undefined) && !Array.isArray(this.arrCasillas[i][j])) return false;
				if(!(this.arrCasillas[i][j] instanceof objCasilla)) return false;

			}
 		}

 		// Si todas las condiciones anteriores se cumplen, ponemos a true this.esGenerado para no pasar de nuevo la lógica y lo devolvemos
 		this.esGenerado = true;
 		return true;

	}

	// Si llegamos aquí es que no se han generado las casillas
	return false;
}
