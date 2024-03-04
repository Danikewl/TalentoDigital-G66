let getPokemons = async () => {
  let data = await fetch("htts://pokeapi.co/api/v2/pokemon/ditto");
  try {
    let pokemon = await data.json();
    console.log(pokemon.name);
    console.log("Excelente respuesta!");
  } catch (error) {
    // console.log(error.name + " : " + error.message);
    // console.error(error.name + " : " + error.message);
    let date = new Date();

    throw new Error(`${date} - ${error.message}`);
  }
};

getPokemons();
