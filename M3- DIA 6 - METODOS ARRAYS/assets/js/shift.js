/*  .SHIFT => Elimino el primer elemento del array (Lo contrario a UNSHIFT) */

let frutas = ["Banana", "Naranja", "Kiwi", "Sandia"];

frutas.shift();
frutas.shift();

console.log("Frutas =>", frutas);

/* --------------------------- */

let libros = [
  { titulo: "Harry Potter", pag: "300" },
  { titulo: "El principito", pag: "100" },
  { titulo: "De animales a dioses", pag: "350" },
];

libros.pop();

console.log("Libros", libros);
