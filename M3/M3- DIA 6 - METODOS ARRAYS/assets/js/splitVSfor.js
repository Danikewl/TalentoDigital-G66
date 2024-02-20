let fecha = "24/01/2024";
//           ↑

/*MISMO Resultado con método */
console.log(fecha.split("/"));

/* Resultado con bucle for */
let arrayFecha = []; /* array para luego obtener el resultado final */
let textoParcial = ""; /* acumulador de texto */

for (let i = 0; i < fecha.length; i++) {
  if (fecha[i] !== "/") {
    textoParcial += fecha[i];
  } else if (fecha[i] === "/") {
    arrayFecha.push(textoParcial);
    textoParcial = "";
  }

  if (i === fecha.length - 1) {
    arrayFecha.push(textoParcial);
    break;
  }
}

console.log(arrayFecha);

