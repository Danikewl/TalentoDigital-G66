/* .MAP => Me devuelve un nuevo array con los elementos modificados */
const usuarios = [
  "Manuel",
  "Alan",
  "Pedro",
  "Sebastian",
  "Alfonso",
  "Lucas",
  "Jorge",
];
/* CON FOR */
let arrayDeSaludos = [];
for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  let saludo = `Hola ${usuario} N°${i + 1}, bienvenido!`;
  arrayDeSaludos.push(saludo);
}
console.log(arrayDeSaludos);

/* CON MÉTODO DE MAP */
const arrayDeSaludosConMap = usuarios.map(
  (usuario, index) => `Hola ${usuario} N°${index + 1}, Bienvenido!`
);
console.log(arrayDeSaludosConMap);

/* mismo ejemplo con función tradicional */

const arrayDeSaludosConMap2 = usuarios.map(function (usuario, index) {
  return `Hola ${usuario} N°${index + 1}, Bienvenido!`;
});
