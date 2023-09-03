//Guardar usuario
const usuarios = require("./models/usuarios");

exports.user = async(data)=>{
    return await data.save()
}