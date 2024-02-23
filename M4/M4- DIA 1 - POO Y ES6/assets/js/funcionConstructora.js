/* Creo una función constructora  => un prototipo/molde para mis objetos */
function Estudiante(nombre, apellido) {
  // Función constructora
  this.nombre = nombre;
  this.apellido = apellido;
  this.saludar = function () {
    console.log("Hola soy " + this.nombre + " " + this.apellido);
  }; //creo un método que todas las instancias van a heredar
  this.estudiar = function () {
    console.log("hola estoy estudiando.");
  }; //creo un método que todas las instancias van a heredar
}

let estudiante1 = new Estudiante("Javiera", "Martinez"); //instancio un estudiante nuevo
console.log(estudiante1);
let estudiante2 = new Estudiante("Francisco", "Cerda");
console.log(estudiante2);
let estudiante3 = new Estudiante("Diana", "Garcia");
console.log(estudiante3);

estudiante1.saludar();
estudiante3.estudiar();

/* Crear método especial para un objeto */
estudiante2.hacerTorpedo = function () {
  console.log("buscar en google, ctrl c ctrl v");
};
estudiante2.hacerTorpedo();
