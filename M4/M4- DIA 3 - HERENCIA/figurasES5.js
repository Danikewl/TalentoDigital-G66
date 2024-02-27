/* ES5 */
//Función constructora padre
function FiguraGeometrica(lado) {
  this.lado = lado;
}

//Función constructora hija
function Poligono(lado) {
  FiguraGeometrica.call(this, lado);//=> lo que hace extends y constructor
}

//Copio el prototipo del padre (lo que hace super)
Poligono.prototype = Object.create(FiguraGeometrica.prototype);
//agrego un método al prototipo
Poligono.prototype.calcularArea = function () {
  return this.lado * this.lado;
};

//instanciar la clase
let cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());
