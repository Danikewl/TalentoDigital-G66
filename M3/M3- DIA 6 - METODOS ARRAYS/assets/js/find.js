/* .FIND =>  Me devuelve el primer elemento de un array que coincida con la condición dada
si find no encuentra nada, devolverá undefined 
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* FIND VS FILTER */
let numeroEncontrado = numeros.find((numero) => numero % 2 === 0);
console.log(numeroEncontrado); //2

let numerosEncontrados = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosEncontrados); //[ 2, 4, 6, 8 ]

/* -----EJEMPLO CON OBJETOS ------------- */

let productos = [
  { nombre: "coca-cola", precio: 990 },
  { nombre: "papas fritas", precio: 590 },
  { nombre: "ramitas", precio: 290 },
  { nombre: "kapo", precio: 190 },
];

let kapo = productos.find(function (producto) {
  return producto.precio == 290;
});
console.log(kapo);
