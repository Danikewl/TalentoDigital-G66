const enviar = document.getElementById("enviar");

function validar() {
  let lugar = document.querySelector(".lugar").value; // .trimm()
  let permitido = /[a-zA-Z]/gim;

  //console.log(lugar.match(permitido));

  if (lugar.match(permitido)) {
    alert("El texto ingresado es permitido");
  } else {
    alert("Solo debe ingresar caracteres alfabéticos");
  }
}

enviar.addEventListener("click", validar);
