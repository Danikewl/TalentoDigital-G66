// prompt? => definir la variable con un valor
let jugadaUsuario = "PAPEL";
let jugadaMaquina = "PAPEL";
//Valor_1 = "papel"
//retorno empate si la máquina saco papel

switch (jugadaUsuario) {
  case "PIEDRA":
    // instrucciones


    break;

  case "PAPEL":
    // instrucciones=> si la jugadamaquina es papel/piedra/tijera, devuelvo el resultado
    /*   if (jugadaUsuario === jugadaMaquina) {
            console.log("Es empate");
          } */
    if (jugadaMaquina === "PIEDRA") {
      console.log("Ganaste! XD");
    } else if (jugadaMaquina === "PAPEL") {
      console.log("Es empate");
    } else if (jugadaMaquina === "TIJERAS") {
      console.log("Perdiste :(");
    } else {
      console.log(
        "Error interno 401, la máquina salió corriendo / no pudo jugar"
      );
    }
    break;

  case valor_3:
    // instrucciones
    break;

  default:
    // instrucciones
    break;
}
