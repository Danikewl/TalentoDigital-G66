const miBtn = document.getElementById("boton");
/* Me devuelve el primer elemento que coincida con el query seleccionado */
const inputBuscador = document.querySelector(".input-a-buscar");
const resultado = document.querySelector(".resultado");

miBtn.addEventListener("click", function () {
  if (inputBuscador.value === "") {
    resultado.innerHTML = "Error, el input no debe estar vacío";
  } else if (inputBuscador.value.length <= 2) {
    resultado.innerHTML = "Error, el input debe tener al menos 3 caracteres";
  } else {
    resultado.innerHTML = "Estas buscando: " + inputBuscador.value;
  }
});
