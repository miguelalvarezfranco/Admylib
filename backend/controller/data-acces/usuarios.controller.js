const usuarios = require('../../models/usuarios.models');

exports.createUsuarios = async(usuariosdata)=>{
    try{
        return  new usuarios(usuariosdata).save();
    }catch(err){
        return err
    }


}

exports.buscarUsuario = async(filter)=>{
    try{
        const buscarUsuario = await usuarios.find(filter);
        if(buscarUsuario){
            return {
                respuesta : true,
                
                usuarios :buscarUsuario
            }
        }else{
            return {
                respuesta :false,
                mensaje: "nose econtro ningun usuario"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}


exports.updateusuarios = async(id, data)=>{
    try{

        const updateusuarios = await usuarios.findOneAndUpdate(id, data );
        if(updateusuarios){
            return {
                respuesta : true,

                usuarios :updateusuarios
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose realizo la actualizacion"
            }
        }

        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.eliminarusuario = async (id) => {
    
    return await usuarios.findByIdAndDelete(id);
}
        
    
//     try{

//         const eliminarusuario = await usuarios.findOneAndUpdate(id  );
//         if(eliminarusuario){
//             return {
//                 respuesta : true,

//                 usuarios :eliminarusuario
//             }
//         }else{
//             return {
//                 respuesta :false,

//                 mensaje: "no se elimino el libro"
//             }
//         }
                
//         } catch (error) {
//         return {
//             respuesta : false,
//             error : err
//         }
//     }
// }

exports.infoUsuario = async (req, res) => {

    try{
        const infoUsu = await usuarios.findOne({ email: req.body.correo });

        if(infoUsu){
            return {
                respuesta : true,

                usuarios :buscarusuario
            }
        }else{
            return {
                respuesta :false,

                mensaje: "no se elimino el usuario"
            }
        }
                
        } catch (error) {
        return {
            respuesta : false,
            error : error
        }
    }

    
    };




