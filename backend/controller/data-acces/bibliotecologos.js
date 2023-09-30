const bibliotecologos = require('../../models/bibliotecologos.model');

exports.registrarBiblio = async(bibliodata)=>{
    return await new  bibliotecologos(bibliodata).save();
}

exports.buscarB = async(filter)=>{

    try{
        const buscarB = await bibliotecologos.find(filter);
        if(buscarB){
            return {
                respuesta : true,
                
                multas :buscarB
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose econtro ningun registro"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.updateBiblio = async(id, data) =>{

    try{

        const updateBiblio = await bibliotecologos.findOneAndUpdate(id , data );
        if(updateBiblio){
            return {
                respuesta : true,

                bibliotecologos :updateBiblio
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