const { enviarEmailNuevo } = require("./controllers/mailingController");

const express = require("express");
const app = express();

app.get("/bienvenida/:clientEmail", (req, res) => {
  try {
    let { clientEmail } = req.params;
    let respuestaEmail = enviarEmailNuevo(
      clientEmail,
      "Bienvenido",
      "Gracias por registrarte!"
    );

    res.send("Email de bienvenida");
  } catch (error) {
    res.send(error);
  }
});

app.get("/compra/:clientEmail", (req, res) => {
  try {
    let { clientEmail } = req.params;
    let respuestaEmail = enviarEmailNuevo(
      clientEmail,
      "Gracias por tu compra",
      "el pedido llegará mañana."
    );

    res.send("Email de compra");
  } catch (error) {
    res.send(error);
  }
});

app.listen(1212, () => {
  console.log("servidor arriba 1212");
});
