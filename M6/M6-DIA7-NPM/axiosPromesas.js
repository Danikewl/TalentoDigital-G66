import axios from "axios";

/* 

let response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  ); 

const personajes = response.data; 
 
*/

axios
  .get("https://rickandmortyapi.com/api/character/")
  .then((response) => {
    const personajes = response.data;
    console.log(personajes);
  })
  .catch((e) => {
    console.log(e);
  });
