import express from "express";
import cors from "cors";
import {router} from "./routes/index.routes.js"
/* CONFIGURACIONES EXPRESS */
const app = express();
const PORT = 1212;
/* MIDDLEWARE */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/appV1", router)

export {app, PORT}