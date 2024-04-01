import { log } from "console"; /* abreviar console.log() */
import moment from "moment";

let mensaje = "Bienvenidos! hoy es";

let prueba = moment().format();
let fechaConMensaje = moment().format(`[${mensaje}] dddd`);
let fechaLarga = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");



log(fechaConMensaje);
