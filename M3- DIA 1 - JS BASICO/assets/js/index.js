/* 
let num1 = parseInt(prompt("Ingrese el primer número"));

let num2 = parseInt(prompt("Ingrese el segundo número"));

console.warn("ATENCIÓN! SU PROGRAMA ESTÁ A PUNTO DE INICAR!!!!");

document.write("La suma es: ");
document.write(num1 + num2);
document.write(" ");
document.write("La resta es: ");
document.write(num1 - num2);
document.write(" ");
document.write("La multiplicación es: ");
document.write(num1 * num2);
document.write(" ");
document.write("La división es: ");
document.write(num1 / num2); 
*/

/* interpolacion vs concatenacion */
let nombre = "Felipe";
let apellido = "Garcia";
let edad = 36;

/* SALUDAR CON CONCATENACIÓN */
let saludoConca = "Hola " + nombre;
/* SALUDAR CON INTERPOLACIÓN */
let saludoInter = `Hola "${nombre}"`;

let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");

let num1 = parseInt(numero1);
let num2 = parseInt(numero2);

let suma = num1 + num2;
let mult = num1 * num2;
let resta = num1 - num2;
let division = num1 / num2;

console.warn("ATENCIÓN! SU PROGRAMA ESTÁ A PUNTO DE INICAR!!!!");
document.write(  `${nombre} + el resultado de sumar ${num1} + ${num2} es ${suma}`);
document.write("---------------");
document.write(  `${nombre} + el resultado de restar ${num1} - ${num2} es ${resta}`);
document.write("---------------");
document.write(  `${nombre} + el resultado de multiplicar ${num1} * ${num2} es ${mult}`);
document.write("---------------");
document.write(  `${nombre} + el resultado de dividir ${num1} / ${num2} es ${division}`);
