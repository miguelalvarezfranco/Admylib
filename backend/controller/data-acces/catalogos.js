// const { mongoose } = require('mongoose');
// const catalogos = require('../../models/catalogo.model');

// exports.registrarProducto = async(produc)=>{
//     return await new  catalogos(produc).save();
// }

// exports.buscarP = async(filter)=>{

//     try{
//         const buscarP = await catalogos.find(filter);
//         if(buscarP){
//             return {
//                 respuesta : true,
                
//                 multas :buscarP
//             }
//         }else{
//             return {
//                 respuesta :false,

//                 mensaje: "nose econtro ningun producto"
//             }
//         }
//     } catch(err){
//         return {
//             respuesta : false,
//             error : err
//         }
//     }
// }

// exports.updateProduct = async(id, data) =>{

//     try{

//         const updateProduct = await catalogos.findOneAndUpdate( data );
//         if(updateProduct){
//             return {
//                 respuesta : true,

//                 productos :updateProduct
//             }
//         }else{
//             return {
//                 respuesta :false,

//                 mensaje: "nose realizo la actualizacion"
//             }
//         }
            
//         } catch (error) {
//         return {
//             respuesta : false,
//             error : err
//         }
//     }
// }

// exports.eliminarProducto = async ( data) => {
//     try{

//         const eliminarProducto = await catalogos.deleteOne( data );
//         if(eliminarProducto){
//             return {
//                 respuesta : true,

//                 multas :eliminarProducto
//             }
//         }else{
//             return {
//                 respuesta :false,

//                 mensaje: "no se elimino el producto"
//             }
//         }
                
//         } catch (error) {
//         return {
//             respuesta : false,
//             error : err
//         }
//     }
// }