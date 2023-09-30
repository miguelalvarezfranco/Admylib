const autores = require('../../models/autores.model');

exports.registerAutor = async(autoresdata)=>{
    return await new autores(autoresdata).save();
}

exports.listar = async(filter)=>{
    try{
        const listar = await autores.find(filter);
        if(listar){
            return {
                respuesta : true,

                autores :listar
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose econtro ningun autor"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.updateAutor = async(id, data) =>{

    try{

        const updateAutor = await autores.findOneAndUpdate(id , data );
        if(updateAutor){
            return {
                respuesta : true,

                autores :updateAutor
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


