const libros = require('../../models/libros.model');

exports.createLibros = async(librosdata) =>{
    return await new  libros(librosdata).save();
}

exports.buscarLibro = async(filter)=>{

    try{
        const buscarLibro = await libros.find(filter);
        if(buscarLibro){
            return {
                respuesta : true,
                
                libros :buscarLibro
            }
        }else{
            return {
                respuesta :false,
                mensaje: "nose econtro ningun libro"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}


exports.updatelibros = async(id, data)=>{
    try{

        const updatelibros = await libros.findOneAndUpdate(id, data );
        if(updatelibros){
            return {
                respuesta : true,

                libros :updatelibros
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
