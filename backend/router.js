const multas = require('./controller/multas.controller');
const libros = require('./controller/libros.controller');
const express = require('express');
const router = express.Router();


router.post("/multas", multas.crearMulta);






module.exports = router;