// const libros = require('../../models/libros.model');
const pagina = require('pagina');

exports.mostrarpagina = async (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
    const  libro = await libros.find();
    res.render('landing', {libro});
};