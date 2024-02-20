/* FILTER => Me retorna un nuevo array con los elementos que se filtran de acuerdo a una condición establecida.

    array.filter(funcion(elemento){ condicion para filtrar })
 */

let clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
  { nombre: "Felipe", edad: 29 },
];

let clientesMayoresDeEdad = clientes.filter((cliente) => cliente.edad >= 18);
console.log(clientesMayoresDeEdad);

let clientesMenoresDeEdad = clientes.filter((cliente) => cliente.edad < 18);
console.log(clientesMenoresDeEdad);
