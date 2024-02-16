/* .PUSH => agrega un elemento al final del array */
let amigos = ["Erick", "Cristian", "Max", "Claudia"];

amigos.push("Gary", "Lucas");

console.log("Amigos =>", amigos);

/* ---------------------------------------- */
let favoritos = ["Harry Potter", "El señor de los anillos"];

favoritos.push("Star Wars", "The princess bride");

console.log("Películas favoritas =>", favoritos);

/* ------------------------------------------ */
let tareas = ["Lavar", "Cortar el cesped"];

let tareaNueva = "Cocinar";

tareas.push(tareaNueva);

console.log("Tareas =>", tareas);

/* --------------------------------------------------- */

var autos = [
  { auto: "Peugeot", color: "rojo" },
  { auto: "Mazda", color: "azul" },
  { auto: "BMW", color: "negro" },
];

autos.push(
  { auto: "Suzuki", color: "verde" },
  { auto: "Chevrolet", color: "amarillo" }
);

console.log("Autos =>",autos);
