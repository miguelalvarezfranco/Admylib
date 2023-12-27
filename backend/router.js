const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');
const nodemailer = require('./controller/uses-cases/nodemailer');

//const passport = require('passport');

const router = express.Router();

//MODULO LIBROS

router.post("/registrarlibros", libros.crearLibros);
router.get("/listarLibro", libros.libro);
router.post("/actualizarLibro", libros.update);
router.get("/eliminarLibro/:id", libros.eliminarL);

//MODULO USUARIOS
router.post("/registrarusuario", usuarios.crearUsuarios);
router.get("/listarUsuario", usuarios.usuario);
router.post("/actualizarUsuarios/:id", usuarios.updateUsu);
router.get("/eliminarusuario/:id", usuarios.eliminarU);

router.post("/inicio", usuarios.login);

router.get("/vistaAdmin",usuarios.VistaAdministrador );

router.get("/cerrarsesion", usuarios.borrarCookie);




//MOSTRAR PAGINA PRICIPAL
router.get("/landing",usuarios.paginaPrincipal);

//INFORMACION DEL PAGO

router.get("/realizarcompra",usuarios.comprar);

router.get("/recuperarc", usuarios.recupe);

router.get("/recuperarc", usuarios.recupe);

// router.post("/recuperarcontraseña", nodemailer.recuperar);



// router.post("/envioCorreo", nodemailer.recuperar);




router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/listarLibros", libros.Tabla);

router.get("/listarUsuarios", usuarios.Tabla2);



///STRIPE

// router.get('/create-checkout-session');
// router.get('/succes');
// router.get('/cancel');






module.exports = router;