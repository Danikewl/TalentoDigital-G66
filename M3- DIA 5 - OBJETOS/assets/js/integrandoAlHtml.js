let perros = [
  {
    raza: "Pastor Alemán",
    origen: "Alemania",
    pelaje: "Lanudo",
    peso: "33kg",
    edad: 12,
  },
  {
    raza: "Poodle",
    origen: "Francia",
    pelaje: "Lanudo",
    peso: "20kg",
    edad: 14,
  },
];
const tabla = document.getElementById("cuerpo-tabla")
let texto =
  "<tr><th>Raza</th><th>Origen</th><th>Pelaje</th><th>Peso</th><th>Edad</th></tr>";

for (const perro of perros) {
  texto += `
    <tr>
        <td>${perro.raza}</td>
        <td>${perro.origen}</td>
        <td>${perro.pelaje}</td>
        <td>${perro.peso}</td>
        <td>${perro.edad}</td>
    </tr>
`;
}

tabla.innerHTML =texto
