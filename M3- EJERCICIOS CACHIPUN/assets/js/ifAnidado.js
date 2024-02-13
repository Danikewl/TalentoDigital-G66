let jugadaUsuario = "PAPEL";
let jugadaMaquina = "PAPEL";


function determinarGanador (jugadaUsuario, jugadaMaquina) {

  if (jugadaUsuario === jugadaMaquina) {
    return console.log("Ambos hicieron la misma jugada, es un Empate! :0")
  } else if (
      jugadaUsuario === 'PAPEL' && jugadaMaquina === "PIEDRA" || 
      jugadaUsuario === 'TIJERA' && jugadaMaquina === "PAPEL" ||
      jugadaUsuario === 'PIEDRA' && jugadaMaquina === "TIJERA") {
      return console.log("Felicidades! le has ganado a la maquina, ponlo en tu CV c:")
    } else if (
        jugadaUsuario === 'PIEDRA' && jugadaMaquina === "PAPEL" || 
        jugadaUsuario === 'PAPEL' && jugadaMaquina === "TIJERA" ||
        jugadaUsuario === 'TIJERA' && jugadaMaquina === "PIEDRA"
    ) {
      return console.log("Auch! has perdido contra una maquina, que ni siquiera es una IA :c")
    } else {
      return console.log("Lo siento no pudimos realizar la jugada, revisa que hayas ingresado correctamente los datos por favor!")
    }
}


determinarGanador(jugadaUsuario, jugadaMaquina)


/* 
Aplicando en las condiciones if todas las posibilidades de empate usando operadores lógicos, luego anidar todas las condiciones de victoria con operadores lógicos, luego todas las condiciones de perdida con lo mismo y en el else poner un mensaje de error en caso que se ingresarán mal los datos

*/