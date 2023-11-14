const mongoose = require('../config/database')

const productosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        maxlength: 100,
    },
    precio: {
        type: String,
        required: true,
    },
    copiasDisponibles: {
        type: Number,
    
    },
    imagen: {
        type: String,
        
    }
});

const productos = mongoose.model('productos', productosSchema);
module.exports = productos;