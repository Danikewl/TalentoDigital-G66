function validar(nombre, telefono, email) {
  let pasamosLaValidacion = true; //false

  let validacionNombre = /^[a-zA-Z]+$/gim;
  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "Ingrese un nombre válido.";
    pasamosLaValidacion = false;
  }

  let validacionTelefono = /^[0-9]+$/;
  if (validacionTelefono.test(telefono) == false) {
    document.querySelector(".errorTelefono").innerHTML =
      "Ingrese un teléfono válido(sólo números).";
    pasamosLaValidacion = false;
  }

  let validaciónEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validaciónEmail.test(email) == false) {
    document.querySelector(".errorEmail").innerHTML =
      "Ingrese un correo válido.";
    pasamosLaValidacion = false;
  }

  return pasamosLaValidacion;
}
function limpiarErrores() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorTelefono").innerHTML = "";
  document.querySelector(".errorEmail").innerHTML = "";
}
function exito() {
  alert("Completado exitosamente");
}
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); /* cancelamos el comportamiento por defecto del form */

  limpiarErrores();

  let textNombre = document.querySelector(".textNombre").value;
  let textTelefono = document.querySelector(".textTelefono").value;
  let textEmail = document.querySelector(".textEmail").value;

  let resultado = validar(textNombre, textTelefono, textEmail);

  if (resultado == true) {
    exito();
  }
});
