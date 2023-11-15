const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');
const catalogos = require('./controller/uses-cases/catalogos.controller');

const router = express.Router();



//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.find);
router.put("/actualizarLibro/:id", libros.update);
router.delete("/eliminarL/:id", libros.eliminarL); //get para hacer busquedas


//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});


router.get("/mostrarFormulario", libros.formularioLibro )

router.get("/catalogo", catalogos.mostrarcatalogo ) //se pone el nombre de la ruta y ademas se llama la funcion que recien se crea para mostrar el fomrulario



//MODULO USUARIO

router.post("/crear", usuarios.crear);


module.exports = router;