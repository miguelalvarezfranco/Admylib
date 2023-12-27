const libros = require('../../models/libros.model');

exports.createLibros = async(librosdata) =>{
    try{
        return  new libros(librosdata).save();
    }catch(err){
        return err
    }
    
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


exports.updatelibros = async(id, datos)=>{


        return await libros.findOneAndUpdate(id, datos );
} 

exports.eliminarLibro = async (id) => {
    return await libros.findByIdAndDelete(id);
}
