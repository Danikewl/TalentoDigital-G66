/* ---------------------------------------- */
/* se agregan dentro de la declaración de la clase, pero fuera del constructor */

class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  calcularArea() {
    return this.lado * this.lado;
  }
}

let c1 = new Cuadrado(10);

/* ------------------------- */
class Auto {
  constructor(marca, modelo, anio, color) {
    (this.marca = marca),
      (this.modelo = modelo),
      (this.anio = anio),
      (this.color = color);
  }

  arrancar() {
    return console.log("estoy arrancando " + this.marca);
  }

  caracteristicas() {
    return console.log(this.marca, this.modelo);
  }
}

let miFerrari = new Auto("Ferrari", "Spider", 2024, "black");
let miCarro = new Auto("Kia", "Mart", 1999, "white");

miFerrari.arrancar();
