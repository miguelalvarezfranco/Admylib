const usuarios = require('../data-acces/usuarios.controller');

exports.crear = async(req, res)=>{
    const datos = req.body;

    const nuevoUsuario = usuarios.crearUsuario(datos);

    res.status(200).json({resultado: nuevoUsuario});
}

