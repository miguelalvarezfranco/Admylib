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

router.post("/actualizar", multas.update ); //get para hacer busquedas

//MODULO AUTORES

router.post("/registrarAutor", autores.registerAutores);

router.get("/listar", autores.findListar );

router.get("/actualizar", autores.actualizarAutor ); //get para hacer busquedas

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);

router.get("/listarLibro", libros.find);

router.get("/actualizarLibro", libros.update);

//MODULO BIBLIOTECOLOGOS

router.post("/register", bibliotecologos.Registrar);

router.get("/ver", bibliotecologos.findB);

router.get("/actualizarLibro", libros.update);

//MODULO USUARIO

router.post("/crear", usuarios.crear);












// router.post("/libros", libros.crearLibro);

// router.post("/autores", libros.crearLibro);




module.exports = router;