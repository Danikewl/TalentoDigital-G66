/* ES6 */
//declaracion de clase padre
class FiguraGeometrica {
  constructor(lado) {
    this.lado = lado;
  }
}

//declaracion de clase hija
class Poligono extends FiguraGeometrica {
  constructor(lado) {
    super(lado);
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

//instanciar la clase
let cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());
