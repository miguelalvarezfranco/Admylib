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

                mensaje: "nose encontro ninguna multa"
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
        const updateMultas  = await multas.findOneAndUpdate(id , data );

        if(updateMultas){
            return {
                respuesta : true,

                multas :updateMultas
            }
        }else{
            return {
                respuesta :false,

                mensaje: "no se actualizo la multa"
            }
        }
                
        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.eliminarMulta = async (id, data) => {
    try{

        const eliminarMulta = await multas.findByIdAndDelete(id , data );
        if(eliminarMulta){
            return {
                respuesta : true,

                multas :eliminarMulta
            }
        }else{
            return {
                respuesta :false,

                mensaje: "no se elimino la multa"
            }
        }
                
        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}






