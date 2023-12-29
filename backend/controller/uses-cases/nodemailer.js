const nodemailer = require("nodemailer");

const usuarios = require("../../models/usuarios.models");
const { infoUsuario } = require("../data-acces/usuarios.controller");

exports.recuperar = async (req, res) => {
const user = await usuarios.findOne({correo: req.body.correo });


console.log(user);

if (user) {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Se define que servicio de correo se va a utilizar para enviar el mensaje
        auth: {
        user: "maalvarez7441@misena.edu.co", // se pone el correo que va a enviar el mensaje
        pass: "cofcrgzcirlxsdtv" // Contraseña de aplicación generada
        }
    });

    const mailOptions = {
      from: "maalvarez7441@misena.edu.co", // Correo que va a enviar el mensaje
      to: req.body.correo, // correo que lo va a recibir
      subject: "recuperar Contraseña", // asunto del correo
      text: user.password // texto del correo /
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        console.log(error);
        } else {
        console.log("Email sent: " + infoUsuario.response);
        }
    });
    } else {
    console.log("Este usuario no existe");
    }

    
};






