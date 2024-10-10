export default class Cl_universidad {
    constructor() {
        this.acumIngreso = 0;
    }

    procesarFijo(fijo) {
        this.acumIngreso += fijo.ingresoTotal();
    }
    
    mostrarIngresoTotal() {
        return this.acumIngreso;
    }
}