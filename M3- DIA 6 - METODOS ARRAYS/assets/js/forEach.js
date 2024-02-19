/* .FOREACH => El método forEach() ejecuta la función indicada una vez por cada elemento del array. */

function mostrarPorConsola(numero) {
  console.log("Te muestro el numero " + numero);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((numero) => mostrarPorConsola(numero));

numeros.forEach((numero) => {
  if (numero % 2 === 0) {
    console.log("Hay un numero par " + numero);
  }
});
