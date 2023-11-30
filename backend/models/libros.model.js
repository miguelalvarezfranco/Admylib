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
module.exports = libro

