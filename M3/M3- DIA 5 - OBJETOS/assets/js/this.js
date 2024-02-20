let perro = {
  raza: "Pastor Alemán",
  origen: "Alemania",
  pelaje: "Lanudo",
  peso: "33kg",
  edad: 12,
  amigable: true,
  saludo: function () {
    console.log("Hola! mi raza es " + this.raza);
  },
};


perro.saludo()