const mongoose = require('../config/database');
const { Schema } = mongoose;

const usuarioSchema = new mongoose.Schema({

  usuario: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
    
  },

  rol: { 
    type: String,     
    default: 'administrador'  

    }})

      
  const usuario = mongoose.model('usuarios', usuarioSchema);
  module.exports = usuario;
  