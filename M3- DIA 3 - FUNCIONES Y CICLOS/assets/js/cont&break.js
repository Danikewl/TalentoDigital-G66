/* 
El ejercicio consiste en mostrar los números pares y contar los números impares y los pares
mediante un ciclo for para los números comprendidos entre el 0 y el 20 (incluidos
ambos), pero cuando se llegue al número 10, el programa debe continuar y no mostrar el
número en cuestión, igualmente, cuando se llegue al número 19 el ciclo debe ser
interrumpido y terminar su ejecución. Para ello, sigamos los siguientes pasos:
*/

let impar = 0; //contadores
let par = 0; //contadores
let entradasAlCiclo = 0; //contadores para saber cuantas veces ingresé al ciclo for
let vueltasCompletas = 0; //contadores para saber cuantas veces se iteró por completo el recorrido del ciclo

for (let i = 0; i <= 20; i++) {
  entradasAlCiclo++;

  if (i === 10) {
    continue; // se ignora cualquier otro proceso
  }

  if (i === 19) {
    break; // se rompe el ciclo actual
  }

  if (i % 2 === 0) {
    par++;
    document.write(i + "<br>");
  } else {
    impar++;
  }

  vueltasCompletas++;
}

document.write("La cantidad de números impares es: " + impar + "<br>");
document.write("La cantidad de números pares es: " + par + "<br>");
document.write(
  "La cantidad de iteraciones en el bucle es: " + entradasAlCiclo + "<br>"
);
document.write("La cantidad de  completas es: " + vueltasCompletas + "<br>");
