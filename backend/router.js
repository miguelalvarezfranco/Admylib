const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');


const router = express.Router();

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.libro);
router.put("/actualizarLibro/:id", libros.update);
router.delete("/eliminarL/:id", libros.eliminarL);





//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});




router.post("/vistaadmin", usuarios.informacion);


router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/mostrarCatalogo", libros.Tabla);

router.get("/listarUsuarios", usuarios.listarusuarios);



// router.get("/mostrarTabla", libros.tablaCatalogo);



//MODULO USUARIO

router.post("/crear", usuarios.crear);

module.exports = router;