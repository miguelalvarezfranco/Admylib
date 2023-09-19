const multas = require('./controller/uses-cases/multas.controller');
const express = require('express');
const router = express.Router();


router.post("/registrar", multas.create); // post hacer un cambio 

router.get("/buscar", multas.find );

router.get("/actualizar", multas.update ); //get para hacer busquedas
//get para hacer busquedas



// router.post("/libros", libros.crearLibro);

// router.post("/autores", libros.crearLibro);




module.exports = router;