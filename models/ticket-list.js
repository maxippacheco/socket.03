const Ticket = require("./ticket");

class TicketList {

	constructor() {
		this.ultimoNumero =  0;
		this.pendientes   = [];
		this.asignados    = [];
	}

	// getter p obtener valores y setter para establecerlos
	get siguienteNumero() {
		this.ultimoNumero++;
		return this.ultimoNumero;
	}

	// 3 que se veran en tarjetas y 10 en el historial
	get ultimos13() {
		return this.asignados.slice(0, 13);
	}

	crearTicket() {
		const nuevoTicket = new Ticket( this.siguienteNumero );
		this.pendientes.push( nuevoTicket );

		return nuevoTicket;
	}

	asignarTicket( agente, escritorio ) {
		if ( this.pendientes.length === 0) {
			return null;
		}

		// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
		const siguienteTicket = this.pendientes.shift();

		siguienteTicket.agente = agente;
		siguienteTicket.escritorio = escritorio;

		this.asignados.unshift( siguienteTicket );

		return siguienteTicket;
	}

	// shift => remove first element of an array
	// unshift => add to the first element of an array


}


module.exports = TicketList;