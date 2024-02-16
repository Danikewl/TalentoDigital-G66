/* .CONCAT => Junta dos arrays y me los devuelve en uno nuevo. */

let frutas = ["Banana", "Pera", "Kiwi"];
let verduras = ["Lechuga", "Brocoli", "Espinaca"];

let frutasYverduras = frutas.concat(verduras);

console.log(frutasYverduras);

/* ----------------------------------------------- */
let autosCompactos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];
let autosDeportivos = [
  { marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina" },
  { marca: "Renault", modelo: "Megane RS", combustible: "Gasolina" },
  { marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina" },
];

let todosLosAutos = autosCompactos.concat(autosDeportivos);
console.log(todosLosAutos);
