const mongoose = require ('../config/database');

const LibrosSchema = new mongoose.Schema({
    isbn: {
        type: Number,
        required: true,
        maxLength:10,
    

    },
    titulo: {
        type: String,
        required: true,
        maxLength:100,

    },
    autor: {
        type: String,
        required: false,
        maxLength:100,
    
    },
    editorial: {
        type: String,
        required: false,
        maxLength:80,
        
    },
    materias: {
        type: String,
        maxLength:50,
        
    },
    Añodepublicacion: {
        type: Date,

    },
    copiasdisponibles: {
        type: Number,
    
    },
    precio: {
        type: Number,
        
    },
    imagen: {
        type:String,
        
    },
    idioma: {
        type: String,
        required:false,
        
    }
});

const libro = mongoose.model('libros', LibrosSchema);
module.exports = libro;

