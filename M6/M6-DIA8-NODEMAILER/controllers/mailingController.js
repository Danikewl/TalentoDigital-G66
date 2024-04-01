const {transporter, MI_MAIL} = require("../config/nodemailer");

const enviarEmailNuevo = (clientEmail, subject, content) => {
  /* Enviar un mail al cliente de params */
  let mailOptions = {
    from: MI_MAIL,
    to: clientEmail,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error, el mail no se ha enviado:  " + err);
      return err;
    } else {
      console.log("Email enviado correctamente", data);
      return data;
    }
  });
};

module.exports = { enviarEmailNuevo };
