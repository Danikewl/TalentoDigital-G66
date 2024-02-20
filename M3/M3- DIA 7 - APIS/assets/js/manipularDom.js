const etiquetasMisteriosas = $("ul.my-list > li > a"); //Esto me devuelve un array, porque estoy trabajando con clases, por lo tanto en cada posición habrá una etiqueta...

etiquetasMisteriosas.css("background", "red");
console.log(etiquetasMisteriosas);

/* Otro ejemplo agregando estilo a las etiquetas <li> */
const etiquetasLi = $("li"); //Tengo un array de etiquetas li.
etiquetasLi.css("background", "yellow");
console.log(etiquetasLi);
