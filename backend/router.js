const multas = require('./controller/uses-cases/multas.controller');
const autores = require('./controller/uses-cases/autores.controller');
const libros = require('./controller/uses-cases/libros.controller');
const bibliotecologos = require('./controller/uses-cases/bibliotecologos.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');


const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   autores:
 *    type: object
 *    properties:
 *     nombreCompleto:
 *      type: string
 *      description: nombre Completo
 *     fechaNacimiento:
 *      type: Date
 *      description: fecha Nacimiento
 *     fechaDeceso:
 *      type: Date
 *      description: fecha Deceso
 *    
 */

/**
 * @swagger
 * /api/registrar:
 *  post:
 *    summary: login user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        decription: nuevo login
 */
router.post("/registrar", multas.create); // post hacer un cambio 
//MODULO MULTAS

router.get("/buscar", multas.find);

router.post("/actualizar/:id", multas.update);

router.post("/eliminarM/:id", multas.eliminar); //get para hacer busquedas
//get para hacer busquedas

//MODULO AUTORES

router.post("/registrarAutor", autores.registerAutores);

router.get("/listar", autores.findListar);

router.post("/actualizarA/:id", autores.actualizarAutor);

router.post("/eliminarA/:id", autores.eliminarA);


//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);

router.get("/listarLibro", libros.find);

router.post("/actualizarLibro/:id", libros.update);

router.post("/eliminarL/:id", libros.eliminarL); //get para hacer busquedas


//MODULO BIBLIOTECOLOGOS

router.post("/register", bibliotecologos.Registrar);

router.get("/ver", bibliotecologos.findB);

router.post("/actualizarB/:id", bibliotecologos.updateB);

router.post("/eliminarB/:id", bibliotecologos.eliminarB); //get para hacer busquedas


//MODULO USUARIO

router.post("/crear", usuarios.crear);












// router.post("/libros", libros.crearLibro);

// router.post("/autores", libros.crearLibro);




module.exports = router;