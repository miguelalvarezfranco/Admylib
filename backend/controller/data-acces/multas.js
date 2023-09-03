const multas = require("../../models/multas.model");

exports.Createmultas = async(multasdata)=>{
    return await multas.find({})
}