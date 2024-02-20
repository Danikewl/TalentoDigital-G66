/* .REVERSE => Invierte el orden del array. Retorna un nuevo array invertido.
*/
let muchachos = ["Juan", "Lucas", "Pedro", "Marcos"];
console.log(muchachos.reverse());

/* EJEMPLO DE COMO PASAR UNA FECHA DEL FORMATO YYYY/MM/DD a DD/MM/YYYY  */

let fecha = "2024-02-16";

let arrayFecha = fecha.split("-")
console.log(arrayFecha)//[ '2024', '02', '16' ]

let arrayInvertido = arrayFecha.reverse()
console.log(arrayInvertido)//[ '16', '02', '2024' ]

let nuevaFecha = arrayInvertido.join("/")
console.log(nuevaFecha)//'16/02/2024'

/* Ejemplo con Métodos anidados */
let nuevaFecha2= fecha.split("-").reverse().join("/")
console.log(nuevaFecha2)//'16/02/2024'
