/* sintaxis del reduce:

array.reduce( función(acumulador,elemento a iterar) ,  valor inicial )

*/

let carrito = [
  {
    nombre: "Harry Potter y el prisionero de Azkaban",
    paginas: 300,
  },
  {
    nombre: "Harry Potter y el misterio del principe",
    paginas: 100,
  },
  {
    nombre: "You don't know JS",
    paginas: 30,
  },
];

valorInicial = 0;
const totalDePaginas = carrito.reduce(
  (acumulador, libro) => acumulador + libro.paginas,
  valorInicial
);

/* CON FOR */
let totalConFor = 0;
for (let i = 0; i < carrito.length; i++) {
  let libro = carrito[i];
  totalConFor += libro.paginas;
}
console.log("TOTAL COPN FOR=>", totalConFor);
