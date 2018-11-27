/* Objeto caballo 
* Hereda de ficha, es la ficha caballo, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/

function objCaballo() {
	this.prototype = Object.create(objFicha);
	this.figura = "caballo.jpg"
} 

objCaballo.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {
		
		if( ((dX == oX+2 || dX == oX-2) && (dY == oY+1 || dY == oY-1)) || ((dX == oX+1 || dX == oX-1) && (dY == oY+2 || dY == oY-2)) )
			arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, objTablero.arrCasillas[dX][dY]);
		
		return arrMovimientos;
	}
}


/* Objeto alfil 
* Hereda de ficha, es la ficha alfil, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/