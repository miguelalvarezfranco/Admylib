const multas = require("../../models/multas.model");

exports.Createmultas = async(multasdata)=>{
    return await new  multas(multasdata).save();
}

exports.buscar = async(filter)=>{

    try{
        const buscar = await multas.find(filter);
        if(buscar){
            return {
                respuesta : true,
                
                multas :buscar
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose econtro ninguna multa"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.updateMultas = async(id, data) =>{

    try{

        const updateMultas = await multas.findOneAndUpdate(id , data );
        if(updateMultas){
            return {
                respuesta : true,

                multas :updateMultas
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose realizo la actualizacion"
            }
        }
                mensaje: "no se pudo actualizar multa"
                
        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}


exports.Eliminar = async()=>{
}