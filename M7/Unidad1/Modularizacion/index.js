import { PORT, app } from "./src/app.js";

/* LEVANTAR EL SERVIDOR */
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: ", PORT);
});