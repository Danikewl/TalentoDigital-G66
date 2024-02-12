const tituloTag = document.getElementById("titulo");
const link = document.getElementById("link");

let clasePeligrosa = "miBoton";

link.innerHTML = `<button class=${clasePeligrosa}> Reiniciar </button>`; /* innerHTML => modifica la estructura HTML completa de la etiqueta */

tituloTag.textContent = `Repaso JS`; /* textContent=> cambiamos el text area / el contenido de texto de la etiqueta */






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
console.log("\n" + "Jugaras " + partidas + " partidas \n");

for (let i = 1; i <= partidas; i++) {
  console.log("\n" + "Estas en la " + i + "° vuelta \n");
  let num = Number(prompt("introduce tu numero"));
  console.log("El numero introducido es " + num)
  console.log(calcularNumero(num));
}
