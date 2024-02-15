let edades = [49, 51, 21, 18, 15];
/* Ejemplo con for para comparar con el for...of */
for (let i = 0; i < edades.length; i++) {
  const edad = edades[i];
  console.log(edad);
}

/* En el for..of podemos recorrer un array , sin necesidad de poner una condición de corte, ya que esta es implicita y terminará de ejecutarse cuando no hayan mas elementos a iterar dentro del array */

for (let edad of edades) {
  console.log(edad);
}
