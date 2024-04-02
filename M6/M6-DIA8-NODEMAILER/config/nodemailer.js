/* Dependencia instalada en el .json */
const nodemailer = require("nodemailer");

const MI_MAIL = "nodemailerADL@gmail.com";
const MI_MAIL_PASSWORD = "vamoscontodo";

/* Con crate transport le paso a nodemalier mis credenciales */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: MI_MAIL,
    pass: MI_MAIL_PASSWORD,
    clientId: "000000000000-xxx0.apps.googleusercontent.com",
    clientSecret: "XxxxxXXxX0xxxxxxxx0XXxX0",
    refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx",
  },
});

/* 
OBJETO EJEMPLO
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "user@example.com",
    clientId: "000000000000-xxx0.apps.googleusercontent.com",
    clientSecret: "XxxxxXXxX0xxxxxxxx0XXxX0",
    refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx" 
  },
});








*/

module.exports = { transporter, MI_MAIL };
