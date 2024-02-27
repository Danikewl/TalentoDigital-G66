class Vehiculo {
  constructor(marca, color, matricula) {
    this.marca = marca;
    this.color = color;
    this.matricula = matricula;
  }
}

class Coche extends Vehiculo {
  constructor(marca, color, matricula, pasajeros) {
    super(marca, color, matricula);
    this.pasajeros = pasajeros;
  }
}
class Moto extends Vehiculo {
  constructor(marca, color, matricula, casco) {
    super(marca, color, matricula);
    this.casco = casco;
  }
}
class Bus extends Vehiculo {
  constructor(marca, color, matricula, ruedas) {
    super(marca, color, matricula);
    this.ruedas = ruedas;
  }
}

class Camion extends Vehiculo {
  constructor(marca, color, matricula, trailer) {
    super(marca, color, matricula);
    this.trailer = trailer;
  }
}

let coche1 = new Coche("Toyota", "Negro", "123ABC", 5);
console.log(coche1);

let moto1 = new Moto("Honda", "Rojo", "456CDF", true);
console.log(moto1);

let bus1 = new Bus("Fuso", "Blanco", "678EDC", 8);
console.log(bus1);

let camion1 = new Camion("Iveco", "Negro", "123123", true);
console.log(camion1);
