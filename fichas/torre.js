/* Objwto torre
* Hereda de ficha, es la ficha torre, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/

function objTorre() {
	this.prototype = Object.create(objFicha);
	this.figura = "torre.jpg"
	this.type= "torre";
} 

objTorre.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {
		// Si el movimiento es vertical
		if(dX==oX && (dY<oY || dY>oY)){
			// Si el movimiento es vertical hacia una casilla menor
			if(dY<oY) {
				for(d=dY, o=oY; o>d; o--) {
					var casilla_tmp = objTablero.arrCasillas[dX][o-1];
					if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
						arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
					else break;
				}
			}			
			// Si el movimiento es verticala hacia una casilla mayor
			if(dY>oY) {
				for(d=dY, o=oY; o<d; o++) {
					var casilla_tmp = objTablero.arrCasillas[dX][o+1];
					if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
						arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
					else break;
				}
			}
		}
		// Si el movimiento es horizontal
		else if(dY==oY && (dX<oX || dX>oX)){
			// Si el movimiento es horizontal hacia una casilla menor
			if(dX<oX) {
				for(d=dX, o=oX; o>d; o--) {
					var casilla_tmp = objTablero.arrCasillas[dY][o-1]
					if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
						arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
					else break;
				}
			}			
			// Si el movimiento es verticala hacia una casilla mayor
			if(dX>oX) {
				for(d=dX, o=oX; o<d; o++) {
					var casilla_tmp = objTablero.arrCasillas[dY][o+1]
					if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
						arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
					else break;
				}
			}
		}

		return arrMovimientos;

	} // Fin return de la función
}