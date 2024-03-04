/* CONECTADO A INDEX.HTML */
const loader = document.getElementById("loader");
const result = document.getElementById("result");
const search = document.getElementById("search");

let getPokemons = async () => {
  loader.innerHTML = `<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGMwOXU2NGk3dW91eXYycDdnd2gzcDViMG1tazk3Nmdwam5xYnlqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif">`;
  try {
    let data = await fetch("https://pokeapi.co/api/v2/pokemon");
    let pokemons = await data.json();

    pokemons.results.forEach((pokemon) => {
      result.innerHTML += `<p>${pokemon.name}</p>`;
    });
  } catch (error) {
    result.innerHTML = `<p>${error.message}</p>`;
    let date = new Date();
    throw new Error(`${date} - ${error.message}`);
  } finally {
    loader.innerHTML = "";
    alert("busqueda finalizada");
  }
};

search.addEventListener("click", () => {
  getPokemons();
});
