import Cl_profesor from "./Profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    ingresoTotal() {
        return this.sueldo + this.bono;
    }
}