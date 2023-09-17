const multas = require('./controller/multas.controller');
const libros = require('./controller/libros.controller');
const autores = require('./controller/autores.controller')
const express = require('express');
const router = express.Router();


router.post("/multas", multas.crearMulta);


//router.post("/libros", libros.crearLibro);

//router.post("/autores", autores.registrarAutores);




module.exports = router;