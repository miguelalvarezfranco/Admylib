const multas = require('./controller/uses-cases/multas.controller');
const autores = require('./controller/uses-cases/autores.controller');
const libros = require('./controller/uses-cases/libros.controller');
const bibliotecologos = require('./controller/uses-cases/bibliotecologos.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');


const express = require('express');
const router = express.Router();

//MODULO MULTAS
router.post("/registrar", multas.create); // post hacer un cambio 

router.get("/buscar", multas.find );

router.post("/actualizar/:id", multas.update );

router.post("/eliminarM/:id", multas.eliminar ); //get para hacer busquedas
//get para hacer busquedas

//MODULO AUTORES

router.post("/registrarAutor", autores.registerAutores);

router.get("/listar", autores.findListar );

router.post("/actualizarA/:id", autores.actualizarAutor ); //get para hacer busquedas

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);

router.get("/listarLibro", libros.find);

router.post("/actualizarLibro/:id", libros.update);

//MODULO BIBLIOTECOLOGOS

router.post("/register", bibliotecologos.Registrar);

router.get("/ver", bibliotecologos.findB);

router.post("/actualizarB/:id", bibliotecologos.updateB);

//MODULO USUARIO

router.post("/crear", usuarios.crear);












// router.post("/libros", libros.crearLibro);

// router.post("/autores", libros.crearLibro);




module.exports = router;