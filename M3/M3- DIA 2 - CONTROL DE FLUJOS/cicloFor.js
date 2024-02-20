/* El Ciclo for nos permite realizar acciones que se repitan mientras se mantiene una
condición. Es una estructura que permite repetir nuestro código cuantas veces sea
necesario.

for (inicializacion; condicion; actualizacion) {
 ...
}

*/

//  i = 5

// for (let i = 0; i < 5; i++) {
//   console.log("este es el valor actual de i", i);
// }

console.log("TABLA DEL 5");

for (let i = 0; i <= 10; i++) {
  console.log(`5 x ${i} =  ${5 * i}`); // 5 x 1  =  5
}
console.log("FIN");

console.log("TABLAS");
let numeroMaestro = 156;

for (let i = 0; i <= 10; i++) {
  console.log(`${numeroMaestro} x ${i} =  ${numeroMaestro * i}`);
}
console.log("FIN");

/* ejemplo con limones y el contador */

console.log("IR AL SUPERMERCADO");

let limiteDeLimones = 100;
let canasta = 0;

for (let i = 0; i < limiteDeLimones; i++) {
  console.log(`En este momento hay ${canasta} limones en la canasta`);
  console.log("agregar un limon a la canasta");
  canasta += 10;
}

console.log(`SALI DE LA TIENDA, TENGO ${canasta} LIMONES`);

/* EJEMPLO CON ACUMULADOR => SUMA DE 1 A 100 */

let acumulador = 0; // Los acumm por lo general se inician en 0

for (i = 1; i <= 10; i++) {
  acumulador += i; // es igual es escribir: acumulador = acumulador + i
  console.log("Acumm Actual ", acumulador);
}
console.log(`La suma total acumulada de los números entre el 1 y 100 es:
${acumulador} `);

/* EJEMPLO CON ACUMULADOR Y CONTADOR */
let acumulador1 = 0; // Los acumm por lo general se inician en 0
let contador = 0;

for (i = 1; i <= 10; i++) {
  let numeroMisterioso = 5;
  contador++;
  acumulador1 += i * numeroMisterioso; // es igual es escribir: acumulador = acumulador + i
}

console.log("cuantas veces paso ", contador);
console.log("Acumm Actual ", acumulador1);
