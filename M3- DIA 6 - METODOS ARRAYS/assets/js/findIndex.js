/* .FINDINDEX => El método findIndex nos permite obtener el índice del objeto que
cumpla en primera instancia con alguna condición que declaremos. */

let productos = [
  { nombre: "coca-cola", precio: 990 },
  { nombre: "papas fritas", precio: 590 },
  { nombre: "ramitas", precio: 290 },
  { nombre: "kapo", precio: 190 },
];

let ramitasIndice = productos.findIndex(
  (producto) => producto.nombre == "ramitas"
);
console.log(ramitasIndice);//2
