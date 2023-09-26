const bibliotecologos = require('../data-acces/bibliotecologos');

exports.Registrar = async(req, res)=>{
    const datos = req.body;

    const nuevoBibliotecologo = bibliotecologos.registrarBiblio(datos);

    res.status(200).json({resultado: nuevoBibliotecologo});
}