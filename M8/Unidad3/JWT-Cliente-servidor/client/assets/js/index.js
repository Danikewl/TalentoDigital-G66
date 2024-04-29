const title = document.getElementById("welcome-title");
const loggedView = document.getElementById("logged-view");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

const login = async (email, password) => {
  const response = await axios.get(
    `http://localhost:3000/login?email=${email}&password=${password}`
  );

  return response;
};

const peticionToken = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const response = await axios.get(
    `http://localhost:3000/peticion?token=${token}`
  );

  console.log(response);
};

submitBtn.addEventListener("click", async () => {
  console.log(email.value);
  console.log(password.value);
  let { data } = await login(email.value, password.value);
  console.log(data);
  if (data.is_Active) {
    /* Guardo el token */
    localStorage.setItem("token", JSON.stringify(data.token));
    /* Muestro mensaje de bienvenida */
    title.innerHTML = `Bienvenido ${data.loggedUser.email}`;
    loggedView.innerHTML = `<button id="peticionBtn" onclick="peticionToken()">Hacer petición al back con token</button>`;
  }
});
