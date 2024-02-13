/* DIVISIÓN */
/* 
let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");

const divide = function (dividendo, divisor) {
  let resultado = parseInt(dividendo) / parseInt(divisor);

  return resultado;
};

document.write("Resultado de la división: " + divide(num1, num2)); 
*/

/* SCOPE */
// let alias = "Alfonso";

// const saludar = function () {
//   console.log(alias);
//   console.log("Hola! ", alias);
// };

// function generarNuevoalias(string) {
//   let alias = string + " Pepe";
//   console.log(alias);
// }

/*  ARROW FUNCTIONS  */
let num = prompt("Ingrese un numero entero");
let resultado = 0;
/* function verificar(numero) {
  if (numero > 0) {
    resultado = "positivo";
  } else if (numero < 0) {
    resultado = "negativo";
  } else if (numero === 0) {
    resultado = "nulo";
  } else {
    resultado = "no es un número";
  }
  return resultado;
}
 */
const verificar = (numero) => {
  if (numero > 0) {
    resultado = "positivo";
  } else if (numero < 0) {
    resultado = "negativo";
  } else if (numero === 0) {
    resultado = "nulo";
  } else {
    resultado = "no es un número";
  }
  return resultado;
};

alert(`El numero ingresado es:
${verificar(parseInt(num))}`);
