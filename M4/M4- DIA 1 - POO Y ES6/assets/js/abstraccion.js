/* ACCEDIENDO AL PROTOTYPE DE UN OBJETO PARA CREAR MÉTODOS */
/* Función constructora */
function Cuadrado(lado) {
  this.lado = lado;
}
/* Agragamos un método al prototype de Cuadrado */
Cuadrado.prototype.calcularArea = function () {
  return this.lado * this.lado;
};
Cuadrado.prototype.calcularPerimetro = function () {
  let perimetro = this.lado * 4;
  return perimetro;
};
/* Este método modifica/setea una propiedad */
Cuadrado.prototype.agrandarCuadrado = function (numero) {
  this.lado = this.lado * numero;
  return this.lado;
};

/* Pasando una variable como argumento */
const miNumero = 25;
let miCuadrado = new Cuadrado(miNumero);

miCuadrado.agrandarCuadrado(miNumero); //=> no hacer en POO ❌miCuadrado.lado = 20❌
console.log(miCuadrado.calcularArea()); //625
console.log(miCuadrado.calcularPerimetro()); //100

/* Sin variable como argumento */
// let miOtroCuadrado = new Cuadrado(5);
// console.log(miOtroCuadrado.calcularArea()); //25
// console.log(miOtroCuadrado.calcularPerimetro()); //20
