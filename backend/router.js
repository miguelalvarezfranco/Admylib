const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');
const passport = require('passport');

const router = express.Router();

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.libro);
router.post("/actualizarCatalogo/:id", libros.update);
router.get("/eliminarL/:id", libros.eliminarL);

//MODULO USUARIOS
router.post("/registrarUsuario", usuarios.creaUsuario);
router.get("/listarUsuarios", usuarios.usuario);
router.post("/actualizarUsuarios/:id", usuarios.updateUsu);
router.get("/eliminarL/:id", usuarios.eliminarU);


//router.post("/registro", usuarios.login);


//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});


// router.get("/inicio",(req, res, next)=>{
//     res.render('inicio');
// });

// router.post("/inicio", passport.authenticate('local-inicio',{
//     successRedirect: '/inicio',
//     failureRedirect: '/inicio',
//     passReqToCallback: true
// }));





router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/mostrarCatalogo", libros.Tabla);

router.get("/listar", usuarios.Tabla2);











//MODULO USUARIO



module.exports = router;