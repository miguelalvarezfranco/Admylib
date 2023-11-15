const mongoose = require ('../config/database');
const { Schema } = mongoose;

const LibrosSchema = new mongoose.Schema({
    isbn: {
        type: Number,
        required: true,

    },
    titulo: {
        type: String,
        required: true,
        maxLength: 200
    },
    autor: {
        type: String,
        required: false,
    },
    editorial: {
        type: String,
        required: false
        
    },
    materias: {
        type: String,
        required:false
    },
    Añodepublicacion: {
        type: Date,
        required: true
    },
    copiasdisponibles: {
        type: Number,
        
    },
    idioma: {
        type: String,
        required:false,
        
    }
});

const libros = mongoose.model('libros', LibrosSchema);
module.exports = libros

