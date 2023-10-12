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
 *   multas:
 *    type: object
 *    properties:
 *     tiempoSancion:
 *      type: string
 *      description: tiempo sancionado
 *     motivo:
 *      type: string
 *      description: motivo sancion
 */



//MODULO MULTAS
router.post("/registrar", multas.create); // post hacer un cambio 

/**
 * @swagger
 * /api/registrar:
 *  post:
 *    summary: create new multa
 *    tags: [multas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/multas'
 *    responses:
 *      200:
 *        description: se creo con exito
 */
router.get("/buscar", multas.find);

/**
 * @swagger
 * /api/buscar:
 *  get:
 *    summary: return all multas
 *    tags: [multas]
 *    responses:
 *      200:
 *        description: todos los multas
 *        content:  
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/multas' 
 */

router.put("/actualizar/:id", multas.update);

/**
 * @swagger
 * /api/actualizar/{id}:
 *  put:
 *    summary: update multas
 *    tags: [multas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/multas'
 *    responses:
 *      200:
 *        description: se actualizo la multa
 *      404:
 *        description: multa no se actualizo
 */

router.delete("/eliminarM/:id", multas.eliminar);

/**
 * @swagger
 * /api/eliminarM/{id}:
 *  delete:
 *    summary: eliminar autor
 *    tags: [multas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    responses:
 *      200:
 *        description: se elimino la multa
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