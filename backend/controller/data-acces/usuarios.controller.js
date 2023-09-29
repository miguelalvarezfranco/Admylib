const usuarios = require('../../models/usuarios.models');

exports.crearUsuario = async(usuariosdata)=>{
    return await new usuarios(usuariosdata).save();
}
