const mongoose = require('../config/database');
const usuarioSchema = new mongoose.Schema({    
    email: {       
    type: String,     
    required: [true, 'Ingresa el correo del usuario'] 
  },

    password: { 
    type: String, 
    required: [true, 'Ingresa la contraseña del usuario']   
    }, 
        
    rol: { 
    type: String,     
    default: 'usuario'  

    }})

      
  const usuarios = mongoose.model('usuarios', usuarioSchema);module.exports = usuarios;
  // const clientes = mongoose.model('clientes', ClienteSchema);
  // module.exports = clientes;