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



exports.updatelibros = async(filter, data)=>{
    
}