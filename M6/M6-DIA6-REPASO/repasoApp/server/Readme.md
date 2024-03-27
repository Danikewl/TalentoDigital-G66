# 1 - Crear package.json

`npm init -y`

# 2 - Instalar dependencias

`npm install -D nodemon`
`npm install --save express cors`

# 3 - Crear scripts en el package.json

"scripts":{
"dev":"nodemon index.js",
"watch":"node --watch index.js",
"start":"node index.js"
},

# 4 - Crear archivos

`index.js`
`.gitignore` => y agregar node_modules

# 5 - Iniciar una instancia de express

const express = require("express");
const app = express();

# 6 - Crear un servidor utilizando un método .listen de express

app.listen(PORT, ()=>{
console.log(`Servidor levantado en el puerto ${PORT}`);
})

# 7 - Probar que el servidor anda

`npm start`
`npm run dev`
`npm run watch`

# 8 - Configurar cors

const cors = require("cors")
app.use(cors())

# 9 - Configurar ruta de prueba

app.get("/prueba", (req, res) => {
  try {
    console.og("SI VES ESTE MENSAJE, ES PORQUE ENTRASTE A LA RUTA");

    res.send("SI VES ESTE MENSAJE TU RUTA API FUNCIONA CORRECTAMENTE");
  } catch (error) {
    res.status(500).json(error.message);
  }
});
