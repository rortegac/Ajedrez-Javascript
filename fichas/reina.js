/* Objeto reina 
* Hereda de ficha, es la ficha reina, al igual que todas las herencias de ficha, debe contener un metodo puedeMover, asi como su figura.
*/

function objReina() {
	this.prototype = Object.create(objFicha);
	this.figura = "reina.jpg"
} 

objReina.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {

		/****************************
		 Movimienos similares a la torre. 
		 ******************************/

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

		/********************* 
		Movimientos del alfil 
		**********************/

		else {
			var difM = 0;

			if(dX > oX) 
				difM = dX-oX;
			else if (dX < oX) 
				difM = oX-dX;


			if(dY+difM == oY){
				if(dX > oX)
					for(x=oX, y=oY;x<dX;x++, y--){
						var casilla_tmp = objTablero.arrCasillas[x+1][y-1]
						if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
							arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
						else break;
					}
				else if(dX < oX) {
					for(x=oX, y=oY;x<dX;x--, y--){
						var casilla_tmp = objTablero.arrCasillas[x-1][y-1]
						if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
							arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
						else break;
					}
				}
			}

			// En este caso dY es mayor que oY
			if(dY-difM == oY){
				if(dX > oX){
					for(x=oX, y=oY;x<dX;x++, y++){
						var casilla_tmp = objTablero.arrCasillas[x+1][y+1]
						if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
							arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
						else break;
					}
				} else if(dX < oX) {
					for(x=oX, y=oY;x>dX;x--, y++){
						var casilla_tmp = objTablero.arrCasillas[x-1][y+1]
						if(!(casilla_tmp.hasFicha() && casilla_tmp.ficha.esMismoEquipo(this.ficha)))
							arrMovimientos = this.seguimientoDeMovimiento(arrMovimientos, casilla_tmp);
						else break;
					}
				}
			}
		}

		return arrMovimientos;
	}
}