/* .SPLIT => Me divide un string según el parametro solicitado y me devuelve un array con las partes divididas. 
OJO! me devuelve un array!
OJO! es un método de String, solo es aplicable a strings
*/

let cliente = "JuanCarlos;29;jcarlos@gmail.com";
let arregloCliente = cliente.split(";");
console.log(arregloCliente);

/* ----------------------------- */

let archivo = "25/02/2024-misarchivos.docx";
let arrayArchivo = archivo.split("-");
console.log(arrayArchivo);

/* ----------------------------- */

let saludo = "Hola buenas tardes!";
let arraySaludo = saludo.split(" ");
console.log(arraySaludo);
console.log(arraySaludo.length);

/* ---------------------------- */

let titulo = "Comida/china/RM/nunoa";
let arrayTitulo = filtros.split("/");
console.log(arrayTitulo);

/* ---------------------------- */

let nombreCompleto = "Daniela Zamora";
/* Guardando el array en una variable */
let array = nombreCompleto.split(" ");
let nombreConArray = array[0];
let apellidoConArray = array[1];

console.log(array);
console.log(nombreConArray);
console.log(apellidoConArray);

/* Sin guardar el array en una variable */
let nombre = nombreCompleto.split(" ")[0];
let apellido = nombreCompleto.split(" ")[1];
console.log(nombre);
console.log(apellido);
