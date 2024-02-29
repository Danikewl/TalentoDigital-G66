const getSuperHero = new Promise((resolve, reject) => {
  /* hago una peticion a la api */
  const data = fetch(
    `https://www.superheroapi.com/api.php/10229043270299787/5`
  );
  if (data) {
    resolve(data); //succes que vemos en ajax
  } else {
    reject("Error"); //error que vemos en ajax
  }
});

getSuperHero
  .then((data) =>
    data.json()
  ) /* convertir la data de respuesta en algo que pueda manipular (JSON)*/
  .then((superHero) => {
    const miSuperHeroe = {
      id: superHero.id,
      nombre: superHero.name,
      imagen: superHero.image.url,
    };
    return miSuperHeroe;
  }) /* formateo la data de la api para utilizar solo lo que necesito */
  .then((miSuperHeroe) =>
    console.log("tu super heroe es", miSuperHeroe.nombre)
  ) /* uso la info formateada anteriormente */
  .catch((error) => console.log(error)); //errores (todos)
