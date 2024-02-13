/* Función que puede o no recibir parametros */
const saludar = function (nombre, apellido) {
  if (apellido && nombre) {
    return console.log(`Hola ${nombre} ${apellido}`);
  } else if (nombre) {
    return console.log(`Hola ${nombre}`);
  } else {
    return console.log("Hola!");
  }
};

let profe = "Alan";
saludar();
saludar(profe);
saludar("Alan", "Garcia");

/*  ARROW Y SU RETURN IMPLICITO */
let miNumero = 15;

const dividePorCincoF = (numero) => numero / 5; // return implicito
console.log(dividePorCincoF(miNumero));

const dividePor5 = (numero) => {
  return numero / 5;
};
console.log(dividePor5(15));

/* BUCLE FOR */
// Busquemos todas las combinaciones
// entre el elemento a y b:
// ¿Cuál es el resultado?

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
