//Declaración de un objeto: Primero instanciamos un objeto vacío y luego le añadimos propiedades.
let rectangulo = new Object();
rectangulo.ancho = 10;
rectangulo.largo = 5;
console.log("MI RECTANGULO => ", rectangulo);

//Declaración de un objeto: notación literal de un objeto.
let cuadrado = {
  largo: 10,
  ancho: 10,
};
cuadrado.alto = 7; // Dot notation => notación de punto
cuadrado["ancho"] = 7; //Bracket notation => notación de corchetes

/* CÓMO CREAR UN OBJETO VACÍO */
let objetoNuevo = new Object();
let objetoNuevoLiteral = {};
