/* Objeto peon 
* Hereda de ficha, es la ficha peon, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/

function objPeon() {
	this.prototype = Object.create(objFicha);
	this.figura = "peon.jpg"
}

objPeon.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {
		if(dX <= oX) return false;
		if(dX-oX > 2) return false;
		if(dX-oX == 2 && !(this.esPrimerMovimiento)) return false;

		// Si es el primer movimiento puede mover 2 casillas
		if(dY-oY == 2 && dX == oX && this.esPrimerMovimiento && !objTablero.getCasilla(dX, dY-1).hasFicha())
			arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, objTablero.arrCasillas[dX][dY]);
		// Para comer fichas
		if(dY-oY == 1 && (dX-oX == 1 || dX - oX == -1) && objTablero.arrCasillas[dX][dY].hasFicha && objTablero.arrCasillas[dX][dY].ficha.esEquipoContrario(this))
			arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, objTablero.arrCasillas[dX][dY]);
		// Movimientos hacia delante
		if(dX == oX && dY-oY == 1 && !objTablero.getCasilla(dX,dY).hasFicha())
			arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, objTablero.getFicha(dX,dY));

		return arrMovimientos;
	}
}

objPeon.prototype.cambiarPor = function(strFicha) {
	// COmprobar cosas como por ejemplo si se encuentra en la ultima casilla de avance, a lo mejor tiene que lanzar otras funciones o poner esta comprobación anterior en otro metodo
	this.type = strFicha;
}