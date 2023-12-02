const mongoose = require('../config/database');
const bcrypt = require('bcrypt-nodejs');
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

    usuarioSchema.methods.encryptedPassword = (password) => {
      return  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    };

    usuarioSchema.methods.compararContraseña = function(password){
      bcrypt.compareSync(password, this.password);
    }

      
  const usuario = mongoose.model('usuarios', usuarioSchema);
  module.exports = usuario;
  