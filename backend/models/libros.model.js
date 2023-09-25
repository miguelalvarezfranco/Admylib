const mongoose = require ('../config/database');
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const LibrosSchema = new mongoose.Schema({
    // autores: [{
    //     id: {
    //         type: Schema.types.ObjectId,
    //         ref: 'autores'
    //     }
    // }],
    isbn: {
        type: Number,
        required: true,
        unique: true
    },
    titulo: {
        type: String,
        required: [true, 'Ingrese el título del libro'],
        maxLength: 200
    },
    autor: {
        type: String,//Schema.types.ObjectId,
        ref: 'autores',
        required: [true, 'Referencia el autor del libro'],
    },
    editorial: {
        type: String,
        ref: 'editoriales',
        required: [true, 'Referencia a la editorial del libro']
    },
    materias: {
        type: Array,
        required: [true, 'Ingrese un nombre de materia para asignar al libro']
    },
    fechaPublicacion: {
        type: Date,
        required: [true, 'Ingrese la fecha en que se publicó el libro']
    },
    copiasDisponibles: {
        type: Number,
        required: [true, 'Ingrese las copias del libro disponibles']
    },
    idioma: {
        type: String,
        ref: 'idiomas',
        required: [true, 'Referencia al idioma en que está el libro']
    }
});

const libros = mongoose.model('libros', LibrosSchema);
module.exports = libros

