const leerResult = document.getElementById("leer-result");
const leerBtn = document.getElementById("leer-btn");
const leerInput = document.getElementById("leer-input");
const artistNameTag = document.getElementById("artist-name");
let inputForm = { nombre: "" };
const setInput = (event) => {
  inputForm = { ...inputForm, [event.target.name]: event.target.value };
 };

leerBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  /* tomar los datos del input  */
  const { nombre } = inputForm;

  /* hacer un fetch al lugar correspondiente */
  const response = await fetch(
    `http://localhost:8080/buscarartista?nombre=${nombre}`
  );

  const data = await response.json();
  if (data.status === "ok") {
    /* mostrar info en pantalla */
    artistNameTag.innerHTML = `<p>${data.artista.nombre}</p>`;
    let songCard = "";
    data.artista.repertorio.forEach((song) => (songCard += `<p>${song}</p>`));
    leerResult.innerHTML = songCard;
  } else {
    alert("NO SE ENCONTRÓ EL ARTISTA");
  }
});

leerInput.addEventListener("change", function (event) {
  setInput(event);
});
