const mongoose = require('../config/database');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

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
    default: 'usuario'  

    }})

    userSchema.methods.encryptedPassword = (password) => {
      return  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    };

    userSchema.methods.compararContraseña = function(password){
      bcrypt.compareSync(password, this.password);
    }

      
  const user = mongoose.model('user', userSchema);
  module.exports = user;
  