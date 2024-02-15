/* Formas de definir un Array */
let arrayVacio = []; //Se puede inicializar un array vacío

let peliculas2 = new Array("It 2", "Rambo 3", "Halloween", "Shaft");

let peliculas3 = Array("It 2", "Rambo 3", "Halloween", "Shaft");

let peliculas = ["It 2", "Rambo 3", "Halloween", "Shaft"];
//   index =        0        1            2           3

console.log(peliculas.length); //.length => nos da la longitud del array(Cuántos elementos tiene)
console.log(peliculas[1])//=> Rambo 3
console.log(peliculas[0])//=> It 2
console.log(peliculas[2])
console.log(peliculas[3])
console.log(peliculas[4])//=> undefined

/*--------------------- Manipulación de un array -------------------------------*/
let instrumentos =["Guitarra Eléctrica","Piano de cola","Violín","Trompeta"];;
console.log(instrumentos);
console.log(instrumentos.length);




/* Ejercicio Guiado */
let datosPersonales = [
  "Lautaro",
  "Martin",
  { edad: 18, nacimiento: 1995 },
  true,
];
//El array tiene 4 elementos, pero su indice empieza en 0
console.log(datosPersonales.length); //.length => nos da la longitud del array(Cuántos elementos tiene)
console.log(datosPersonales);
