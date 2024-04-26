const {
  getGuitarByID,
  getGuitarsV2,
  filtroByBody,
  orderValues,
} = require("./controllers/index.controllers");
const express = require("express");
const app = express();
app.use(express.static("public"));

/* GET V2 */
app.get("/v2/guitarras", async (req, res) => {
  try {
    let { order, property, currentPage = 1, elementsPerPage = 2 } = req.query;
    let { allGuitars, count, prevPage, nextPage } = getGuitarsV2(
      currentPage,
      elementsPerPage
    ); //=> [array de guitarras]
    let orderedGuitars = orderValues(property, order, allGuitars);

    let responseBonita = {
      pages: {
        currentPage: currentPage,
        prev: prevPage,
        next: nextPage,
      },
      api_version: "V2",
      status: "OK",
      count: count,
      guitarras: orderedGuitars,
    }; //=> HATEOAS
    res.status(200).json(responseBonita);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", message: error.message, code: error.code });
  }
});

app.get("/v2/guitarras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { properties } = req.query;

    let guitar = getGuitarByID(id, properties);

    res.status(200).json(guitar);
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
});

app.get("/v2/guitarras/body/:cuerpo", (req, res) => {
  try {
    const { order, property } = req.query; //"asc" "desc"   undefined= falsy
    const cuerpo = req.params.cuerpo;
    const allGuitars = filtroByBody(cuerpo);
    let orderedGuitars = orderValues(property, order, allGuitars);

    let responseBonita = {
      status: "OK",
      api_version: "V2",
      count: orderedGuitars.length,
      guitarras: orderedGuitars,
    };
    res.send(responseBonita);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", message: error.message, code: error.code });
  }
});

module.exports = { app };
