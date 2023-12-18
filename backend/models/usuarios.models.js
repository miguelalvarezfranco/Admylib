const mongoose = require('../config/database');
// const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const usuariosSchema = new mongoose.Schema({

  usuario: {
    type: String,
    
  },
  correo: {
    type: String,
    
  },
  password: {
    type: String,
    
  },

  rol: { 
    type: String,     
    default: 'usuario'  

    }})

  const usuario = mongoose.model('usuarios', usuariosSchema);
  module.exports = usuario;
  