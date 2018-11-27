/* Objeto rey 
* Hereda de ficha, es la ficha rey, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/

function objRey() {
	/* He pensado, como posiblemente pasaremos por prototyppe stos datos directamente a ficha, quitar el constructor*/
	this.prototype = Object.create(objFicha);
	this.figura = "rey.jpg"
} 

objRey.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {
		// Puede mover a caulquier casilla colindante a la suya siempre y cuando, no estñe ocupada por una ficha del mismo equipo o esa casilla no esté siendo atacada por otra casilla
		if(!(objTablero.getCasilla(dX, dY).hasFicha()) && !(objTablero.getCasilla(dX, dY).esAtacadaPorEnemigo())){
			if((math.abs(dX-oX) === 1 && (math.abs(dY-oY) === 1 || math.abs(dY-oY) === 0)) || (math.abs(dY-oY) === 1 && (math.abs(dX-oX) === 1 || math.abs(dX-oX) === 0)))
				arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, objTablero.getCasilla(dX, dY)); 
		}

		return arrMovimientos;
	}
}