const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');

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
router.get("/landing",usuarios.paginaPrincipal)



router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/listarLibros", libros.Tabla);

router.get("/listarUsuarios", usuarios.Tabla2);





module.exports = router;