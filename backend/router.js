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
 *      description: tiempo de la sancionado
 *     motivo:
 *      type: string
 *      description: motivo de la sancion
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
 *    summary: eliminar multa
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
 *        description: la multa no se eliminado
 */


//MODULO AUTORES

/**
 * @swagger
 * components:
 *  schemas:
 *   Autores:
 *    type: object
 *    properties:
 *     nombreCompleto:
 *      type: string
 *      description: nombre completo
 *     fechaNacimiento:
 *      type: Date
 *      description: fecha de nacimiento
 *     fechaDeceso:
 *      type: Date
 *      description: fecha de deceso
 */

router.post("/registrarAutor", autores.registerAutores);

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

router.get("/listar", autores.findListar);

/**
 * @swagger
 * /api/listar:
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

router.put("/actualizarA/:id", autores.actualizarAutor);

/**
 * @swagger
 * /api/actualizarA/{id}:
 *  put:
 *    summary: update autores
 *    tags: [autores]
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
 *            $ref: '#/components/schemas/autores'
 *    responses:
 *      200:
 *        description: se actualizo el autor
 *      404:
 *        description: el autor no se actualizo
 */


router.delete("/eliminarA/:id", autores.eliminarA);

/**
 * @swagger
 * /api/eliminarA/{id}:
 *  delete:
 *    summary: eliminar autor
 *    tags: [autores]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    responses:
 *      200:
 *        description: se elimino el autor
 *      404:
 *        description: autor no eliminado
 */


//MODULO LIBROS

/**
 * @swagger
 * components:
 *  schemas:
 *   Libros:
 *    type: object
 *    properties:
 *     isbn:
 *      type: Number
 *      description: nombre isbn
 *     titulo:
 *      type: string
 *      description: ingresa el titulo
 *     autor:
 *      type: string
 *      description: ingresa el autor
 *     editorial:
 *      type: string
 *      description: nombre de la editorial
 *     materias:
 *      type: array
 *      description: ingrese el nombre de la materia
 *     fechaPublicacion:
 *      type: Date
 *      description: ingrese una fecha publicacion
 *     copiasDisponibles:
 *      type: Number
 *      description: Ingrese numero de copias 
 *     idioma:
 *      type: string
 *      description: idioma 
 */

router.post("/registrarlibro", libros.creaLibros);

/**
 * @swagger
 * /api/registrarlibro:
 *  post:
 *    summary: create new libro
 *    tags: [libros]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/libros'
 *    responses:
 *      200:
 *        description: se creo con exito
 */

router.get("/listarLibro", libros.find);

/**
 * @swagger
 * /api/listarLibro:
 *  get:
 *    summary: return all libros
 *    tags: [libros]
 *    responses:
 *      200:
 *        description: todos los libros
 *        content:  
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/libros' 
 */

router.put("/actualizarLibro/:id", libros.update);

/**
 * @swagger
 * /api/actualizarLibro/{id}:
 *  put:
 *    summary: update libros
 *    tags: [libros]
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
 *            $ref: '#/components/schemas/libros'
 *    responses:
 *      200:
 *        description: se actualizo el libro
 *      404:
 *        description: el libro no se actualizo
 */

router.delete("/eliminarL/:id", libros.eliminarL); //get para hacer busquedas

/**
 * @swagger
 * /api/eliminarL/{id}:
 *  delete:
 *    summary: eliminar libro
 *    tags: [libros]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    responses:
 *      200:
 *        description: se elimino el libro
 *      404:
 *        description: libro no eliminado
 */

//MODULO BIBLIOTECOLOGOS

/**
 * @swagger
 * components:
 *  schemas:
 *   bibliotecologos:
 *    type: object
 *    properties:
 *     documento:
 *      type: Number
 *      description: tiempo sancionado
 *     nombre:
 *      type: string
 *      description: motivo sancion
 *     correo:
 *      type: string
 *      description: ingresa correo
 *     password:
 *      type: string
 *      description: contraseña 
 *     horarioEntrada:
 *      type:string
 *      description: horario de entrada
 *     horarioSalida:
 *      type:string
 *      description: horario de salida
 */

router.post("/register", bibliotecologos.Registrar);

/**
 * @swagger
 * /api/register:
 *  post:
 *    summary: create new bibliotecologo
 *    tags: [bibliotecologos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/bibliotecologos'
 *    responses:
 *      200:
 *        description: se creo con exito
 */

router.get("/ver", bibliotecologos.findB);

/**
 * @swagger
 * /api/ver:
 *  get:
 *    summary: return all bibliotecologos
 *    tags: [bibliotecologos]
 *    responses:
 *      200:
 *        description: todos los bibliotecologos
 *        content:  
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/bibliotecologos' 
 */

router.put("/actualizarB/:id", bibliotecologos.updateB);

/**
 * @swagger
 * /api/actualizarB/{id}:
 *  put:
 *    summary: update bibliotecologos
 *    tags: [bibliotecologos]
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
 *            $ref: '#/components/schemas/bibliotecologos'
 *    responses:
 *      200:
 *        description: se actualizo el bibliotecologo
 *      404:
 *        description: el bibliotecologo no se actualizo
 */


router.delete("/eliminarB/:id", bibliotecologos.eliminarB); //get para hacer busquedas

/**
 * @swagger
 * /api/eliminarB/{id}:
 *  delete:
 *    summary: eliminar bibliotecologo
 *    tags: [bibliotecologos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: usar el id
 *    responses:
 *      200:
 *        description: se elimino el bibliotecologo
 *      404:
 *        description: bibliotecologo no eliminado
 */



//MODULO USUARIO

router.post("/crear", usuarios.crear);



// router.post("/libros", libros.crearLibro);

// router.post("/autores", libros.crearLibro);

//http://localhost:7778/api-doc/#/bibliotecologos/delete_api_eliminarB__id_




module.exports = router;