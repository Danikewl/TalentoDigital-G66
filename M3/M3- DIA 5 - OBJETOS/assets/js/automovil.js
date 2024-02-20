/* OBJETOS=> Sintaxis básica
  let objeto = {
    clave: valor
  }
*/

let auto = {
  marca: "Mazda",
  modelo: 2023 /* Si el valor es un dato, es una propiedad */,
  arrancar: function () {
    return alert("brmmm brmmm");
  } /* Si el valor es una función es un método */,
};

/* Dot notation => Notación de puntos */
alert(`El auto ${auto.marca}, modelo ${auto.modelo}`);
/* Bracket notation => Notación de corchetes */
alert(`El auto ${auto["marca"]}, modelo ${auto["modelo"]}`);

/* Un método es una función dentro de un objeto */
/* ejecuto el método de auto en un evento de click */
document.getElementById("arranque").addEventListener("click", function () {
  auto.arrancar();
  //auto.["arrancar"]()
});
