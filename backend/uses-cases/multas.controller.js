const multas = require('../controller/data-acces/multas');

exports.create = async(infomultas)=>{
    const {tiempoSancion, motivo } = infomultas;

    const nuevaMulta = multas.Createmultas(infomultas);

    return nuevaMulta 
}