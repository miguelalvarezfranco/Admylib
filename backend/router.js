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
 *      description: nombreCompleto
 *     fechaNacimiento:
 *      type: Date
 *      description: fechaNacimiento
 *     fechaDeceso:
 *      type: Date
 *      description: fechaDeceso
 *    
 */

/**
 * @swagger
 * /api/registrarAutor:
 *  post:
 *    summary: create new autor
 *    tags: [autores]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/autores'
 *    responses:
 *      200:
 *        description: se creo con exito
 */

//MODULO MULTAS
router.post("/registrar", multas.create); // post hacer un cambio 

router.get("/buscar", multas.find);

/**
 * @swagger
 * /api/Listar:
 *  get:
 *    summary: return all autores
 *    tags: [autores]
 *    responses:
 *      200:
 *        description: todos los autores
 *        content:  
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/autores' 
 */

router.post("/actualizar/:id", multas.update);

router.post("/eliminarM/:id", multas.eliminar);

/**
 * @swagger
 * /api/eliminarA/{id}:
 *  delete:
 *    summary: eliminar autor
 *    tags: [autores]
 *    parameters:
 *      - in: path
 *        nombre: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    responses:
 *      200:
 *        description: se elimino el usuario
 *      404:
 *        description: autor no eliminado
 */


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