let vaca = new Object(); // instancio el objeto
vaca.sonido = function () {
  console.log("muuuuuuu");
}; //creo un método para el objeto vaca
vaca.sonido(); //invoco el método

/* ---Creando método con la notación literal del objeto------ */

perro = {
  nombre: "Firulais",
  hablar: function () {
    console.log("guau");
  },
};
perro.hablar();
