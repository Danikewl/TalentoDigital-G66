// falsies =>  0, undefined, null, NaN, false,
//Los valores por defecto en ES6 vs ES5
/*--------------- ES5 vs ES6 ---------------*/
function miFuncionSumaES5(num) {
  num = num || 5;
  return num + num;
}
miFuncionSumaES5(15);

function miFuncionsumaES6(num = 5) {
  return num + num;
}
miFuncionsumaES6(); //agregar numero para probar

/*--------------- ES5 vs ES6 ---------------*/
function generarUsuario(username) {
  username = username || "user#123456";
  return username;
}
generarUsuario("Lautaro");

const generarUsuarioFlecha = (username = "user#1234") => username;

/*--------------- ES5 vs ES6 ---------------*/
function fooES5(a, b, c) {
  a = a || 1;
  b = b || 2;
  c = c || 3;
  return a + b + c;
}
fooES5(5, 6, 7);

function fooES6(a = 1, b = 2, c = 3) {
  return a + b + c;
}
fooES6();

/* utilizando funciones flechas */
let fooFlecha = (a = 1, b = 2, c = 3) => a + b + c;
console.log(fooFlecha(1, 5));
