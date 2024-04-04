const fs = require("fs");

let miAuto = {
  marca: "Lamborgini",
  modelo: "DIABLO",
};

/* ESCRIBIR ARCHIVO */
/* FUNCTION = (nombredelarchivo, variableaguardar"objeto"array") */
fs.writeFileSync("MiAuto.json", JSON.stringify(miAuto));

/* LEER ARCHIVO */
/* FUNCTION = (nombredelarchivo) */
fs.readFile("MiAuto.json", "utf8", function (error, data) {
  /* Convierto el .json a objeto JS para manipularlo con el código */
  let parsedData = JSON.parse(data);
  console.log(parsedData);
});
