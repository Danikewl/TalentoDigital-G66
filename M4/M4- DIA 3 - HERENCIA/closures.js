/* CLOSURE => Es una función en donde no existen
variables, es decir, el closure no tiene
variables propias. */

/* SCOPE GLOBAL */
// let a = 1;

// function global() {
//   console.log(a); // 1
// }

// global()
// console.log(a)

/* Ejercicio guiado */
let a = 1; //variable declarada a un nivel global de mi archivo.

function global() {
  console.log(a);

  function interno() {
    console.log(a);
  }

  interno();
}

global();

console.log(a);
