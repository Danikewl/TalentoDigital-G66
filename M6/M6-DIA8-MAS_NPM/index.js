const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`
    Servidor Levantado.
    PUERTO : ${PORT},
    PID : ${process.pid}.
    `);
});



//taskkill /F /PID 14512