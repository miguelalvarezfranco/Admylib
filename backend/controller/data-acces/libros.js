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

exports.eliminarLibro = async (id) => {
    try{

        const eliminarLibro = await libros.findOneAndDelete(id);
        if(eliminarLibro){
            return {
                respuesta : true,

                libros :eliminarLibro
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
