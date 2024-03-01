import { getData } from "./controllers/controllers.js";

const cardSection = document.getElementById("card-section");
const previousPageBtn = document.getElementById("previous-page");
const nextPageBtn = document.getElementById("next-page");
/* PAGINACIÓN */
let currentPage = 0;
let nextPage = "";
let prevPage = "";

const showCards = async (url) => {
  //las peticiones de digimon vienen en un array de objetos dentro de  var digimons
  const data = await getData(url); // {content:[..], pageable:{console.log(digimons);
  const digimons = data.content;
  const pageable = data.pageable;

  currentPage = pageable.currentPage;
  nextPage = pageable.nextPage;
  prevPage = pageable.previousPage;

  let digimonCards = "";
  digimons.forEach(
    (digimon) =>
      (digimonCards += `      
                        <figure class="effect-honey">
                            <img src=${digimon.image} alt="img04" class="w-100"/>
                            <figcaption>
                                <h2> ${digimon.name} <i>${digimon.id}</i></h2>
                                <span class="miCard" id=${digimon.id} href=${digimon.href}>Ver detalle</span>
                            </figcaption>			
                         </figure>
      `)
  );
  cardSection.innerHTML = digimonCards;
};

previousPageBtn.addEventListener("click", () => {
  console.log("prevv");
  showCards(prevPage);
});
nextPageBtn.addEventListener("click", () => {
  console.log("nextt");
  showCards(nextPage);
});

/* Primer Renderizado */
showCards();

let misCards = document.getElementsByClassName("miCard")

misCards.addEventListener("click", (event)=>{console.log("click", event);})

