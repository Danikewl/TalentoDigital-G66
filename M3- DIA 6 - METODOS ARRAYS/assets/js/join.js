/* .JOIN => Unifica los elementos de un array en un string. Serán unidos por el caracter que pase en el parámetro.
OJO! Me devuelve un string.
*/
let amigos = ["Erick", "Cristian", "Max", "Claudia"];
console.log(amigos.join(" - "));

/* ---------------------------- */
let dirección = ["Rebeca Matte 18", "Santiago"];
console.log(dirección.join(", "));

/* ---------------------------- */
let email = ["jaime-morales", "gmail.com"];
console.log(dirección.join("@"));

/* ------COMO CAMBIAR EL FORMATO DE UNA FECHA UTILIZANDO SPLIT Y JOIN---------- */
let fecha = "24/01/2024";

let arrayDeFecha = fecha.split("/");
console.log(arrayDeFecha);

let nuevaFecha = arrayDeFecha.join("-");
console.log(nuevaFecha);
