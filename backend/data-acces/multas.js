const multas = require("../models/multas.model");

exports.Createmultas = async(multasdata)=>{
    return await multas (multasdata).save();
}

exports.Buscar = async()=>{
    return await multas.find();
}

exports.updateMultas = async(filter, data) =>{
    return await multas.findOneAndUpdate({filter }, data );
}

