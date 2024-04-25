const guitarras = require("./data/guitarras.js");
const express = require("express");
const app = express();

/* CONTROLADORES */
const getGuitarsV1 = () => {
  const formatedResponse = guitarras.map((guitar) => {
    return {
      name: guitar.name,
      href: `http://localhost:3000/api/V1/guitarras/${guitar.id}`,
    };
  });

  return formatedResponse;
};

const getGuitarsV2 = () => {
  const formatedResponse = guitarras.map((guitar) => {
    return {
      guitar: guitar.name,
      src: `http://localhost:3000/api/V1/guitarras/${guitar.id}`,
    };
  });

  return formatedResponse;
};

const getGuitarByID = (id) => {
  let guitar = guitarras.find((guitar) => guitar.id === Number(id));

  if (guitar) {
    return guitar;
  } else {
    throw new Error("LA GUITARRA QUE BUSCAS NO HA SIDO ENCONTRADA");
  }
};

/* EXPRESS */
app.listen(3000, () => console.log("Servidor encendido en el puerto 3000!"));

app.use(express.static("public"));

/* GET V1 */
app.get("/api/V1/guitarras", async (req, res) => {
  try {
    let formatedGuitars = getGuitarsV1();
    let responseBonita = {
      guitarras: formatedGuitars,
      count: guitarras.length,
      status: "OK",
      api_version: "V2",
    }; //=> HATEOAS
    res.status(200).json(responseBonita);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", message: error.message, code: error.code });
  }
});

app.get("/api/V1/guitarras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let guitar = getGuitarByID(id);
    res.status(200).json(guitar);
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

/* GET V2 */
app.get("/api/V2/guitarras", async (req, res) => {
  try {
    let formatedGuitars = getGuitarsV2(); //=> [array de guitarras]
    let responseBonita = {
      guitarras: formatedGuitars,
      count: guitarras.length,
      status: "OK",
      api_version: "V2",
    }; //=> HATEOAS
    res.status(200).json(responseBonita);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", message: error.message, code: error.code });
  }
});
