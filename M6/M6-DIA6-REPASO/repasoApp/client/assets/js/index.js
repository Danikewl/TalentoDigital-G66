const data = await fetch(`http://localhost:3000/movies`);
const movies = await data.json();
console.log(movies);