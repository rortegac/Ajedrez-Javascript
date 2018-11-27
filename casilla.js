/*
* Objeto Casilla
* Define cada casilla por cada instancia y las propiedades de esta, como la posición, el color, si contiene alguna ficha...
*/

function objCasilla(posX, posY) {
	this.row = posX;
	this.col = posY;
	this.id = posX + '-' + posY;
	this.color = null;
	this.hasFichaInCasilla = false;
	this.ficha = null;
	this.atacada = 0; // 0 Ninguna, 1 Blanca, 2 Negra, 3 Ambas.
	this.atacadas = new Array();
}

objCasilla.prototype.posicionarFicha = function(FichaAtaq) {
	if(FichaAtaq instanceof objFicha) {
		var antertior = FichaAtaq.position;
		if(in_array(FichaAtaq.position.atacadas, this.id)) {

			if(this.hasFicha) {
				if(this.ficha.equipo == Ficha.equipo) {
					return; // No puede mover, tal vez deberia generar una error.
				} else {
					this.ficha.morir(Ficha);
				}
			}

			if(Ficha.type == "peon" && this.row == 7) Ficha.cambiarFicha();

			this.hasFicha = true;
			anterior.hasFicha = false;
			this.ficha = Ficha;
		}
	}
}

/*
	@Param object.casilla casillaAtaq Casilla en la que se encuentra la ficha que ataca, esta se añadira la casilla de esta clase a su array de atacadas
	@Param object.ficha Ficha de la casilla que ataca  

	Funcion que informa a la casilla que es atacada y pone los valores de ataque en la casilla atacante
*/
objCasilla.prototype.esAtacada = function(casillaAtaq, fichaAtaq) {
	if (this.atacada < 3) {
		if(!(this.atacada == fichaAtaq.equipo)) this.atacada = this.atacada + fichaAtaq.equipo;
	}

	casillaAtaq.atacadas.push(this.id);
}

objCasilla.prototype.esAtacadaPorEnemigo = function() {

}

objCasilla.prototype.esProtegida = function() {

}

objCasilla.prototype.getFicha = function() { 
	if(this.hasFicha()) return this.ficha;

	// Posiblemente aquí habría que generar una excepción.

	else return false;
}

objCasilla.prototype.hasFicha = function() {
	return this.hasFichaInCasilla;
}