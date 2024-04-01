// import uuid from "uuid" //=> utilizaria los métodos de uuid.ejemplo()
import { v4 } from "uuid"; //=> importo el método que necesito ejemplo()

const idNuevo = v4();
const idNuevo2 = v4();
const idNuevo3 = v4();

let persona = {
  id: idNuevo,
  nombre: "Juan",
  apellido: "Perez",
};

let persona2 = {
  id: idNuevo2,
  nombre: "Juan2",
  apellido: "Perez2",
};

let persona3 = {
  id: idNuevo3,
  nombre: "Juan3",
  apellido: "Perez3",
};

console.log(persona);
console.log(persona2);
console.log(persona3);
