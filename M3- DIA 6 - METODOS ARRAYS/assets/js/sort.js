/* .SORT => Este método nos permite ordenar de manera alfabética los tipos de datos
string. Para otros tipos de datos, sort ordena de acuerdo a su valor en el estándar Unicode.
Retorna un nuevo array ya ordenado.
*/

let amigos = ["Erick", "Cristian", "Max", "Claudia"];
console.log(amigos.sort());

let numeros = [25, 8, 9, 6, 456, 21, 485];
console.log(numeros.sort());

/* si utilizamos .sort() nos lo ordenará en base al primer dígito
Para ordenarlos de menor a mayor, debemos utilizar una función dentro de sort-
Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

console.log(numeros.sort((a, b) => a - b));

let ordenAscendente = numeros.sort((a, b) => a - b);

let ordenDescendete = numeros.sort((a, b) => b - a);
