const libros = require('../models/libros.model');

exports.createLibros = async(librosdata) =>{
    return await libros.create(librosdata)
}

exports.find = async()=>{
    return await libros.find();
}

exports.updatelibros = async(filter, data)=>{
    
}