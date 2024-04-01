import _ from "lodash";
import chalk from "chalk";

const numeros = [1, 2, 3, 4, 5, 6];

/* ------------------------------------------------------- */
/* -------------CON LOADASH------------------------ */
/* ------------------------------------------------------- */
let pares_impares = _.partition(numeros, (numero) => numero % 2);
console.log(chalk.blue(pares_impares));

/* ------------------------------------------------------- */
/* -------------SIN LOADASH------------------------ */
/* ------------------------------------------------------- */

let pares = [];
let impares = [];

for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] % 2) {
    impares.push(numeros[index]);
  } else {
    pares.push(numeros[index]);
  }
}

let arregloFinal = [impares, pares];
console.log(chalk.redBright(arregloFinal));
