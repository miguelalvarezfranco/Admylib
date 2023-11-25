const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');


const router = express.Router();

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.libro);
router.put("/actualizarLibro/:id", libros.update);
router.delete("/eliminarL/:id", libros.eliminarL);


// router.get("/catalogo", libros.catalogo); 


//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});


// router.post("/vistaadmin", usuarios.infoUsuario);


router.get("/mostrarFormulario", libros.formularioLibro)

// router.get("/catalogo", catalogos.catalogoLibros ) //se pone el nombre de la ruta y ademas se llama la funcion que recien se crea para mostrar el fomrulario


//MODULO USUARIO

router.post("/crear", usuarios.crear);

module.exports = router;