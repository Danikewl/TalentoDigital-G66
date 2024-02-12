// let consulta = "peras";
// let precioConsultado = 0;

// if (consulta == "manzanas") {
//   precioConsultado = 150;
// } else if (consulta == "peras") {
//   precioConsultado = 300;
// } else if (consulta == "bananas") {
//   precioConsultado = 200;
// } else {
//   precioConsultado = "error";
// }

// console.log(precioConsultado);

/*EJERCICIO => escribe una función que recibe como parámetro un numero entero,
La función debe retornar :
 si num es múltiplo de 3, retornar "fizz";
 si num es múltiplo de 5, retornar "buzz";
 si num es múltiplo de 5 y de 3, retornar "fizzbuzz";
 si no es múltiplo de ninguno, retornar false

 La función debe hacernos repetir 3 veces las pruebas
*/
/* -----------------------CON IF */
function calcularNumero(numero) {
  if (numero % 15 === 0) {
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else {
    return false;
  }
}

let partidas = Number(
  prompt("Introduce la cantidad de jugadas que quieras realizar")
);
document.write("Jugaras " + partidas + " partidas");

for (let i = 1; i <= partidas; i++) {
  document.write("Estas en la " + i + "° vuelta");
  let num = Number(prompt("introduce tu numero"));
  document.write(calcularNumero(num));
}
