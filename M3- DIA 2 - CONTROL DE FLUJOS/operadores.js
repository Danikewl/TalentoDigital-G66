/* VARIABLES Y TIPOS DE DATOS */
var oracion = "No usar var porque es antiguo"; /*💀 VAR ya no se usa  */
let oracionNueva = "Esto si se usa"; /*✅ variable con LET*/

/* Declaración VS asignación de una variable */
let cadenaDeTexto; /* Declaración de la variable=> su valor por el momento undefined */
cadenaDeTexto =
  "Esto es un string"; /* Asignacion de valor de una variable, luego de su declaración */

let numero = 5; /* ✅Declaración y asignación de valor a una variable */
numero = 10; /* Reasignación de valor */

/* -----------------------TIPOS DE DATOS------------------------- */
let entero = 10; //Number
let decimal = 2.5; //Number
var frase = "Hola  ¿Como  estas?,Lautaro"; //String
var letra = "d"; //String
let verdadero = true; //Boolean
let falso = false; //Boolean
let indefinido = undefined; // Undefined
/* ------------------------------------------------ */
let nulo = null; // Null
let datosRandom = ["Hola", 10, 15]; //Array
let persona = { nombre: "Alan", edad: 45 }; //Objeto

/* -----------------------OPERADORES MATEMÁTICOS------------------------- */
/* Las operaciones matemáticas arrojan un valor de salida único */
let numeroFavorito = 22;

let suma = numeroFavorito + 2; //24
let resta = 5 - 5; // 0
let multipliacion = 5 * 5; //25
let potencia = 2 ** 3; // 8
let division = 25 / 5; // 5
let residuoDeDivison = 25 % 5; // 25/5 => 0 sin resto
let esPar = 3 % 2; /* Si da 0 es par, sino es impar */
/* -----------------------OPERADORES DE ASIGNACIÓN COMPUESTA------------------------- */
/* Son operadores que reasignan/modifican/reemplaza el valor de una variable......por el resultado de la operación/según el valor específico que uno indique y su operador  */
let numeroA = 4;

numeroA += 1;
numeroA -= 1;
numeroA *= 5;
numeroA /= 5;
/* -----------------------OPERADORES DE INCREMENTO/DECREMENTO------------------------- */
/* Aumenta el valor de la variable en 1 (Puede ser usado para que cambie su valor en otra escala) */
let numeroB = 25;

numeroB++; //26
numeroB--; //25

/* -----------------------OPERADORES RELACIONALES / DE COMPARACIÓN e IGUALDAD------------------------- */

/* Menor que=> compara si el valor izquierdo es menor que el derecho */
let menorQue = 5 < 10; //true
let esMenorQue = 5 < 5; //false

/* Mayor que=> compara si el valor izquierdo es mayor que el derecho */
let mayorQue = 5 > 10; //false
let esMayorQue = 10 > 10; //false

/* Menor o igual que=> compara si el valor izquierdo es menor o igual que el derecho */
let menorOIgualQue = 5 <= 10; //true
let esMenorOIgualQue = 5 <= 5; //true

/* Mayor o igual que=> compara si el valor izquierdo es mayor o igual que el derecho */
let mayorOIgualQue = 5 >= 10; //false
let esMayoroIgualQue = 10 >= 10; //true

/* Igualdad => compara si los dos valores son iguales, sin importar el tipo de dato */
let sonIguales = 5 == 5; //true
let sonIguales2 = "5" == "5"; // true
let sonIguales3 = 555 == "456"; // false
let sonIguales4 = 555 == "555"; // true
let sonIguales5 = "555" == 555; // true
let sonIguales6 = "Lautaro" == "lautaro"; //false

/* Igualdad ESTRICTA => compara si los dos valores son iguales, IMPORTA el tipo de dato */
let sonIgualesEstricto = 5 === 5; //true
let sonIgualesEstricto2 = 5 === "5"; //false
let sonIgualesEstricto3 = 555 === "456"; // false
let sonIgualesEstricto4 = 555 === "555"; // false
let sonIgualesEstricto5 = "555" === 555; // false
let sonIgualesEstricto6 = "Lautaro" === "lautaro"; //false

/* No igualdad => devuelve true si NO SON IGUALES  */
let noIgualdad = 5 != "5"; // false
let noIgualdad2 = 6 != "5"; // true

/* No igualdad estricta /No son iguales estricto=> devuelve true si NO SON IGUALES, COMPARA TIPO DE DATO*/
let noSonIgualesEstricto = 5 !== 5; //false
let noSonIgualesEstricto2 = 5 !== "5"; //true
let noSonIgualesEstricto3 = 555 !== "456"; // true
let noSonIgualesEstricto4 = 555 !== "555"; // true
let noSonIgualesEstricto5 = "555" !== 555; // true
let noSonIgualesEstricto6 = "Lautaro" !== "lautaro"; //true

let num1 = 15;
let num2 = 20;

let prueba = num1 + num2 >= num2;
//            15  +  20  >=  20
//               35      >=  20
//  prueba =          true

/*------------------ OPERADORES LÓGICOS --------------------*/
//AND =>&& => si las dos condiciones se cumplen da como resultado TRUE, basta con que una sea FALSE, para que esto no se cumpla

let comparacionA = 5 > 1 && 25 === 25; // true
//                  true       true

let comparacionB = 10 > 100 && 45 === 25; //false
//                  false       false

let comparacionC = 5 >= 8 && 8 >= 5; // false
//                 false      true        

//OR => || => Basta con que una de las partes sea true para que el resultado final sea true

let comparacionAA = 5 > 1 || 25 === 25; // true
//                   true       true

let comparacionBB = 10 > 100 || 45 === 25; //false
//                   false       false

let comparacionCC = 5 >= 8 || 8 >= 5; // true
//                  false      true    

let laRealidad =   true && false


let comparacionGrande = (2 || 'hola') || (23 && 78) && (true || false) 
//                          2         ||     78     &&    true  
//                           2        ||       true





/* valores falsies => false, 0, "", null, undefined, y NaN */