/* Funciones autoejecutables */
/* ES5 */
(function () {
  console.log("5");
})();

/* ES6 */
(() => console.log("5"))();

/* Guardar IIFE en una variable */
let mostrarEnConsola = (() => console.log("5"))();
