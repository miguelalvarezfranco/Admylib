const { mongoose } = require('mongoose');
const Productos = require('../../models/productos.model');

exports.registrarProducto = async(produc)=>{
    return await new  Productos(produc).save();
}

exports.buscarP = async(filter)=>{

    try{
        const buscarP = await Productos.find(filter);
        if(buscarP){
            return {
                respuesta : true,
                
                multas :buscarP
            }
        }else{
            return {
                respuesta :false,

                mensaje: "nose econtro ningun producto"
            }
        }
    } catch(err){
        return {
            respuesta : false,
            error : err
        }
    }
}

exports.updateProduct = async(id, data) =>{

    try{

        const updateProduct = await Productos.findOneAndUpdate( data );
        if(updateProduct){
            return {
                respuesta : true,

                productos :updateProduct
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

exports.eliminarProducto = async ( data) => {
    try{

        const eliminarProducto = await Productos.deleteOne( data );
        if(eliminarProducto){
            return {
                respuesta : true,

                multas :eliminarProducto
            }
        }else{
            return {
                respuesta :false,

                mensaje: "no se elimino el producto"
            }
        }
                
        } catch (error) {
        return {
            respuesta : false,
            error : err
        }
    }
}