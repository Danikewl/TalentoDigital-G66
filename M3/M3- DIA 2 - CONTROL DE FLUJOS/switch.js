/* SWITCH => Ejecutar código si la variable es igual al caso presentado 

 switch (variable) {

    case valor_1:
    // instrucciones
    break;
 
    default:
    // instrucciones
    break;
    } 
    
    */

let nota = 10;

switch (nota) {
  case 10:
    console.log("felicitaciones! has obtenido un 10");
    break;

  case 5:
    console.log("Casi lo logras! has obtenido un 5");
    break;

  case 1:
    console.log("Debes esforzarte mas");
    break;

  default:
    console.log("El trabajo no ha sido corregido");
    break;
}

let role = "admin";

switch (role) {
  case "admin":
    console.log("eres admin, puedes usar todos las funciones");
    break;

  case "user":
    console.log("eres user, puedes ingresar y ver mi contenido");
    break;

  case "moderator":
    console.log("eres moderator, puedes observar la actividad de los usuarios");
    break;

  default:
    console.log("no tinenes un rol asignado");
    break;
}
