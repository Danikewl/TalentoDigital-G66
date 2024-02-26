class Perro {
  constructor(raza) {
    this._raza = raza;
    this._edad = edad;
  }

  get raza() {
    return this._raza;
  } /* getter */

  set raza(nueva_raza) {
    this._raza = nueva_raza;
  } /* setter */
}

let perro1 = new Perro("Pastor Aleman", 5);
console.log(perro1); /* asi se utiliza el getter */

perro1.raza = "Pastor Labrador"; /* ASI SE UTILIZA EL SETTER EN ES6 */
console.log(perro1.raza);
