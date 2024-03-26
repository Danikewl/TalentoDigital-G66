import { app, PORT } from "./src/app.js";




app.listen(PORT, () => {
  console.log("SERVIDOR LEVANTADO CORRECTAMENTE EN EL PUERTO " + PORT);
});
