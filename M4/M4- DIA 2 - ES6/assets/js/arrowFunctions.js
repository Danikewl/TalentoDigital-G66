/*ES5 vs ES6 */
console.log("ES5 vs ES6");
/* ------------------------------- */
function miFuncionSuma(num) {
  return num + num;
}
const miFuncionFlechaSuma = (num) => num + num;
//Si tiene un parámetro, no es necesario poner paréntesis.
//Se puede omitir el return y las llaves {} si es una sola línea de programación después de la flecha.

/* -------------------------------- */
function saludar() {
  return console.log("Hola!!");
}
const saludarFlecha = () => console.log("Hola!!");
//Cuando no existen parámetros se debe agregar los paréntesis antes de la flecha obligatoriamente.

/* -------------------------------- */
function generarUsuario(nombre, apellido) {
  return nombre + apellido;
}
const generarUsuarioFlecha = (nombre, apellido) => nombre + apellido;
//Si existen dos o más parámetros, se deben implementar los paréntesis obligatoriamente para encerrar los parámetros.
generarUsuario("Alan", "Cerda");
generarUsuarioFlecha("Alan", "Cerda");

/* --------FUNCIONES ANÓNIMAS------- */

/* 
function () {console.log("Anonima")}
()=> console.log("Hola") 
*/

/* ejemplos de donde encontrarlas ("en callbacks") */
/* let btn = document.getElementById("button1");

btn.addEventListener("click", function () {
  console.log("Hice click");
});

btn.addEventListener("click", () => console.log("Hice click"));

let array = [];
array.map(elem => console.log(elem)); */
