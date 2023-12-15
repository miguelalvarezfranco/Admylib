const mongoose = require ('../config/database');
const { Schema } = mongoose;

const LibrosSchema = new mongoose.Schema({
    isbn: {
        type: Number,
        required: true,
        maxLength:10,
        minLength:5

    },
    titulo: {
        type: String,
        required: true,
        maxLength:100,
        minLength:50
    },
    autor: {
        type: String,
        required: false,
        maxLength:10,
        minLength:5
    },
    editorial: {
        type: String,
        required: false,
        maxLength:80,
        minLength:30
        
    },
    materias: {
        type: String,
        maxLength:10,
        minLength:5
        
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

