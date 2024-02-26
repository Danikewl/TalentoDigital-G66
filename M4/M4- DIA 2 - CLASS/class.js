//----------Método con funcion constructora----------
// function Cuadrado(lado) {
//     this.lado = lado;
//   }

//
class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }
}

let c1 = new Cuadrado(10);

/* ------------------------------------------- */

class Estudiante {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
let e1 = new Estudiante("Juan", 35);
