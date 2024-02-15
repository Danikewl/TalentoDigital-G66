let form = document.getElementById("formulario");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let resultado = document.querySelector(".resultado");

function login() {
  resultado.innerHTML = `Bienvenido ${email.value}`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); /* cancelo el comportamiento por defecto del evento */
  console.log(event);
  login();
});
