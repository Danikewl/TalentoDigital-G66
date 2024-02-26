/* Interpolación vs Concatenación */
let nombre = "Jorge";
let saludo = "Hola " + "soy " + nombre;
let saludo2 = "Hola" + " " + "soy" + " " + nombre;
let saludoInterpol = `Hola soy ${nombre}`;

/* ------------------- */

let persona = { nombre: "José" };
let direccion = { calle: "Avenida Santiago 123", comuna: "Santiago" };

let mensaje =
  "Hola " +
  persona.nombre +
  ",tu dirección es " +
  direccion.calle +
  ", " +
  direccion.comuna; //ES5

let mensajeInterpol = `Hola ${persona.nombre},tu dirección es ${direccion.calle}, ${direccion.comuna}`; //ES6
