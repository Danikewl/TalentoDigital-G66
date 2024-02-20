// 1. El “id” con valor “contenedor”.
const body = document.getElementById("body");
const contenedor = document.getElementById("contenedor");
const parrafo = document.getElementById("parrafo");
const btnAccion = document.getElementById("btnAccion");
// 2. El ul mediante la instrucción getElementsByTagName.
const unorderedList = document.getElementsByTagName("ul");

// 3. La clase con el valor “menu” mediante la instrucción getElementsByClassName.
const menu = document.getElementsByClassName("menu");

// 4. La clase con el valor “item” mediante la instrucción querySelectorAll.(hace referencia al CSS)
const item = document.querySelectorAll("li");

let nombre = "warning";

parrafo.innerHTML += `<strong class=${nombre}> Soy un </strong> parrafo`; //innerHTML += me sumará a la estructura el valor que necesite... con = lo reemplazo
// parrafo.innerHTML = "" => seteo la estructura a nada

body.style.backgroundColor = "#031020";
body.style.color = "white";

btnAccion.style.color = "yellow";
btnAccion.style.backgroundColor = "blue";

/* Setear/crear atributos con setAttribute */
btnAccion.setAttribute("name", "enviarFormulario");
// btnAccion.name = "enviarFormulario" //se puede hacer así tambien
