const mongoose = require('../config/database');
// const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const usuariosSchema = new mongoose.Schema({

  usuario: {
    type: String,
    maxLength:100,
    minLength:5
  },
  correo: {
    type: String,
    maxLength:100,
    minLength:15,
    
  },
  password: {
    type: String,
    minlength:8,
    
    
  },

  rol: { 
    type: String,     
    default: 'usuario'  

    }})

  const usuario = mongoose.model('usuarios', usuariosSchema);
  module.exports = usuario;
  