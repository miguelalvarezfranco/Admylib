const multas = require('../data-acces/multas');

exports.create = async(infomultas)=>{
    const {tiempoSancion, motivo } = infomultas;

    const nuevaMulta = await multas.Createmultas(infomultas);
    if(nuevaMulta){
        return {
            exito : nuevaMulta
        }
    }else{
        return {
            fallo : "no se pudo crear"
        }
    }
    
}

exports.update = async(upmultas)=>{
const {tiempoSancion, motivo} = upmultas;
}