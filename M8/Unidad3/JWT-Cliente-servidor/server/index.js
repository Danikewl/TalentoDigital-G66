const users = require("./data/users.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const app = express();
/* Middlewares */
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
/* Llave secreta */
const secretKey = "Mi Llave Ultra Secreta";
const tokenOptions = { expiresIn: "120s" };

app.get("/login", async (req, res) => {
  try {
    const { email, password } = req.query;

    console.log(req.query);
    /* Usuario a loguear */
    console.log("USUARIO ENCONTRADO=>");
    const selectedUser = {
      email,
      password,
    };

    /* Verificar que el usuario exista */
    //supuestamente=>buscar en el array de usuarios si existe y si la contraseña coincide? firmo el token : error: usuario y contraseña incorrectos
    let loggedUser = users.find(
      (user) => user.password === password && user.email === email
    );
    /* Firma del token solamente si el usuario existe*/
    if (loggedUser) {
      const token = jwt.sign(selectedUser, secretKey, tokenOptions);

      res.status(200).json({
        status: "Ok",
        is_Active: true,
        message: "Usuario logueado",
        token: token,
        loggedUser: loggedUser,
      });
    } else {
      res.status(200).json({
        message:
          "El usuario y/o la contraseña no son correctos. Vuelve a intentarlo",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get("/peticion", async (req, res) => {
  try {
    const { token } = req.query;

    return jwt.verify(token, secretKey, (err, data) => {
      err
        ? res.status(404).json({
            status: "Error",
            message: "Usuario no encontrado",
            error: err,
          })
        : res
            .status(200)
            .json({ status: "Ok", message: "Gracias por la petición" });
    });
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => console.log("Your app listening on port 3000"));
