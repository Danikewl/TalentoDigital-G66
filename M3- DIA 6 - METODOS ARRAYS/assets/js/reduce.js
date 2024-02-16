/* .REDUCE => El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. */
var deudas = [10000, 5000, 50000, 35000];

var sumatoriaDeudas = deudas.reduce(function (contador, deuda) {
  return contador + deuda;
});

console.log(sumatoriaDeudas);//100000

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
