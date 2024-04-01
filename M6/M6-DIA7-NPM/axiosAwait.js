import axios from "axios";

let dbResponse = await axios.get(
  "https://dragonball-api.com/api/characters"
); /* get a la api */

let dragonBall = dbResponse.data;
//  console.log(dragonBall);



/* ----------------------------------------------------------------- */
let pokeResponse = await axios.get(
  "https://pokeapi.co/api/v2/pokemon/ditto"
); /* get a la api */

let pokemones = pokeResponse.data;

//   console.log(pokemones);

/* ----------------------------------------------------------------- */

let rymResponse = await axios.get("https://rickandmortyapi.com/api/character/");

let personajesRyM = rymResponse.data;

console.log(personajesRyM);
