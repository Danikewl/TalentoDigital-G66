/* COMENTAR OTRAS CONDICIONES PARA UNA FUNCIONALIDAD ÓPTIMA, PROBAR DE A UNA */

/* 
const passwordDB = 1234;
const userDB = "Felipe";

let user = prompt("ingresa tu usuario");
let password = Number(prompt("ingresa tu contraseña"));

let condicion = user === userDB && password === passwordDB;

if (condicion) {
  alert("INGRESO EXITOSO");
} else {
  alert("EL USUARIO O CONTRASEÑA ES INCORRECTO");
} 
*/

/* EJEMPLO CON MAYORIA DE EDAD */
/* 
let edad = prompt("Ingresa tu edad: ");
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Todavía eres menor de edad");
} 
*/

/* EJEMPLO PARA VALIDAR EN DOS PASOS, POCO OPTIMO, ESTO SE DEBE HACER EN UNA FUNCIÓN */
/*  
if (user === userDB) {
   if (password === passwordDB) {
     alert("INGRESO EXITOSO");
   } else {
     alert("CONTRASEÑA INCORRECTA");
   }
 } else {
   alert("EL USUARIO ES INCORRECTO");
 }

*/
/* ------SWITCH---------------------------------------------------------------------------------------- */
/* 
let num = prompt("Escribe un Número del 1 al 7");
switch (num) {
  case "1":
    alert("El día de la semana es lunes");
    break;
  case "2":
    alert("El día de la semana es martes");
    break;
  case "3":
    alert("El día de la semana es miércoles");
    break;
  case "4":
    alert("El día de la semana es jueves");
    break;
  case "5":
    alert("El día de la semana es viernes");
    break;
  case "6":
    alert("El día de la semana es sábado");
    break;
  case "7":
    alert("El día de la semana es domingo");
    break;
  default:
    alert("El número ingresado no corresponde a un día de la semana");
    break;
} 
*/

/* ---FOR---------------------------------------- */
/*
let numero = 6;

for (i = 1; i <= 10; i++) {

  let resultado = numero * i;
  document.write(numero + " " + " x " + " " + i + " = " + resultado + "<br>");

} 
*/

/* FUNCIONES */
let num1 = prompt("Ingresa primer número: ");
let num2 = prompt("Ingresa segundo número: ");

function suma(num1, num2) {
  // recibimos los dos números como parámetros de la función
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let resultadoSuma = num1 + num2;

  return "El resultado de la suma es "+resultadoSuma; // permite retornar de la función con un valor en específico
}

document.write(suma(num1, num2)); //enviamoslos dos números ingresados por el usuario comoargumentos de la función
