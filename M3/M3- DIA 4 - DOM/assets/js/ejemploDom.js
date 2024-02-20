/* Selecciono y modifico en una sola línea */
document.getElementById("textoSaludo").innerHTML =
  "Hola,este párrafo fue modificado";

/* Selecciono la etiqueta, la guardo en una variable y luego la uso */
const entradaUno = document.getElementById("entradaUno");

entradaUno.value = "Click Aquí";
entradaUno.type = "button";
entradaUno.setAttribute("style", "color: red; background-color: green");


