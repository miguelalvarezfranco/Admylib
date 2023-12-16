const mongoose = require('../config/database');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const usuarioSchema = new mongoose.Schema({

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

    // userSchema.methods.encryptedPassword = (password) => {
    //   return  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // };

    // userSchema.methods.compararContraseña = function(password){
    //   bcrypt.compareSync(password, this.password);
    // }

      
  const usuarios = mongoose.model('usuarios', usuarioSchema);
  module.exports = usuarios;
  