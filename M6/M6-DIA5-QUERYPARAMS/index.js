//                        ____
//                   ____|    \
//                  (____|     `._____
//                   ____|       _|___
//                  (____|     .'
//                       |____/
//                       PLUG ME


const { PORT, app } = require("./src/app.js");

/* LEVANTAR EL SERVIDOR */
app.listen(PORT, () => {
  console.log("servidor levantado en el puerto " + PORT);
});
