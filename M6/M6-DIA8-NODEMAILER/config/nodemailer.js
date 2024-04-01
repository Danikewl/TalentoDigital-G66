/* Dependencia instalada en el .json */
const nodemailer = require("nodemailer");

const MI_MAIL = "nodemailerADL@gmail.com";
const MI_MAIL_PASSWORD = "vamoscontodo";



/* Con crate transport le paso a nodemalier mis credenciales */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MI_MAIL,
    pass: MI_MAIL_PASSWORD,
  },
});



module.exports = { transporter, MI_MAIL };
