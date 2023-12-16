const usuarios = require('../../models/usuarios.models');

exports.crearUsuario = async(usuariosdata)=>{
    return await new usuarios(usuariosdata).save();

}

exports.buscarusuario = async(filter)=>{
    try{
        const buscarusuario = await usuarios.find(filter);
        if(buscarusuario){
            return {
                respuesta : true,
                
                usuarios :buscarusuario
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

exports.eliminarusuario = async (id, data) => {
    try{

        const eliminarusuario = await usuarios.deleteOne(id , data );
        if(eliminarusuario){
            return {
                respuesta : true,

                usuarios :eliminarusuario
            }
        }else{
            return {
                respuesta :false,

                mensaje: "no se elimino el libro"
            }
        }
                
        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}

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





    // const catalogo = await productos.find();
    
    // console.log(infoUsu);
    
    // const contraUsuario = req.body.password
    
    // if(infoUsu.password === contraUsuario){
    //     console.log(true);
    // }
    
    // if(infoUsu.rol === 'vendedor' ){
    //     res.render("inicio");
    // }else if(infoUsu.rol === 'clientes'){
    //     res.render('paginaprincipal' ,{producto: catalogo});
    // }



