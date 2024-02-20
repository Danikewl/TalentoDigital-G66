let perro = {
  raza: "Pastor Alemán",
  origen: "Alemania",
  pelaje: "Lanudo",
  peso: "33kg",
  edad: 12,
  amigable: true,
  sonidos: function () {
    console.log("El perro ladra");
  },
  
};

/* ASIGNACIÓN DE UNA NUEVA PROPIEDAD */
/* Se asigna como valor de la propiedad "amigos" otro objeto, con dos propiedades (gatos, perros), a su vez, cada propiedad tiene en su valor un array */
perro.amigos = {
  gatos: ["Felix", "Silvestre"],
  perros: ["Goofy", "Snoopy"],
};

console.log(perro.amigos); /* accedo al objeto   {} */
console.log(
  perro.amigos.perros
); /* accedo a la propiedad perros del  objeto []*/
console.log(
  perro.amigos.perros[1]
); /* accedo al índice de lo que necesito  "string"*/
