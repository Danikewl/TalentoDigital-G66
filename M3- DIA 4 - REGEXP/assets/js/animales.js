const buscar = document.getElementById("buscar");

function validar() {
  let animal = document.querySelector(".animal").value; //Ya tenemos value aquí
  let patron1 = /gato/i;
  let patron2 = /perro/ig;

  console.log("Esto arroja el regexp",animal.match(patron2));

  if (animal.match(patron1) || animal.match(patron2)) {
    alert("Palabra ingresada permitida");
  } else {
    alert("La palabra ingresada NO es permitida");
  }

}

buscar.addEventListener("click", validar);
