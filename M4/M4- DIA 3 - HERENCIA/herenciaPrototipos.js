let persona_uno = {
  nombre: "Juan",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

console.log(persona_uno);

let persona_dos = Object.create(persona_uno); //crear una copia del objeto existente utilizando su prototipo para el nuevo
console.log(persona_dos);
