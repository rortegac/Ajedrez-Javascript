function objAlfil() {
	this.prototype = Object.create(objFicha);
	this.figura = "alfil.jpg"
} 

objAlfil.prototype.movimientos = function(casillaOrigen, casillaDestino, arrMovimientos) {
	if (!((casillaOrigen instanceof objCasilla) && (casillaDestino instanceof objCasilla))) {
		return; // Debereía generar un error o una excepción.
	}

	var arrMovimientos = arrMovimientos || new Array();

	var oX = casillaOrigen.row,
		oY = casillaOrigen.col,
		dX = casillaDestino.row,
		dY = casillaDestino.col;

	return function() {

		// IMPORTANT!! Faltan dos comprobaciones para cuando:
		//		dY es mayor que oY pero dX es menor que oX que ek bucle debería tener ;x--, y++
		// Revisar en table los 4 casos pues está todo mal !!!

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

		return arrMovimientos;
	}
}
