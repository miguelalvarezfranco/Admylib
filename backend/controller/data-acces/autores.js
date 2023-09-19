const autores = require('../../models/autores.model');

exports.registerAutor = async(autoresdata)=>{
    return await autores.registerAutores(autoresdata);
}

exports.find = async()=>{
    return await autores.find();
}