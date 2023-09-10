const multas = require("../../models/multas.model");

exports.Createmultas = async(multasdata)=>{
    return await multas.create(multasdata);
}

exports.find = async()=>{
    return await multas.find();
}

exports.update = async(filter, data) =>{
    return await multas.findOneAndUpdate({filter }, data );
}