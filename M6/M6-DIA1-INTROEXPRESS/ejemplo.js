let persona = { nombre: "Ricky", apellido: "Martin", edad: 25 };
console.log(persona.nombre, persona.apellido, persona.edad);

/* DESTRUCTURING */
let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);

/* DESTRUCTURING DE PARAMS */
let req = { params: { idSuperHero: 6 } };

let { idSuperHero } = req.params;
