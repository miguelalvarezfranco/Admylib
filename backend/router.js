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
// router.post("/registrarUsuario", usuarios.crear);
// router.get("/listarUsuario", usuarios.usuario);
// router.post("/actualizarUsuarios/:id", usuarios.updateUsu);
// router.get("/eliminarU/:id", usuarios.eliminarU);


//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});


router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/listarLibros", libros.Tabla);

//router.get("/listarUsuarios", usuarios.usu);






// router.get("/mostrarTabla", libros.tablaCatalogo);



//MODULO USUARIO

// router.post("/crear", usuarios.crear);

module.exports = router;