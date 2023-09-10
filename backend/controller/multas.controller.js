const multas = require('../uses-cases/multas.controller');

exports.crearMulta = async(req, res)=>{
    try {
        const respuesta = await multas.create(req.body)
    } catch (error) {
        console.error(error);
    }
}