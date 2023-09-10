const libros = require('../uses-cases/libros.controller');

exports.crearLibro = async(req, res)=>{
    try {
        const res = await libros.creaLibros(req.body)
    } catch (error) {
        console.error(error);
    }
}