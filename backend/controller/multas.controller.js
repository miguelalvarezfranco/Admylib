const multas = require('../uses-cases/multas.controller');

exports.crearMulta = async(req, res)=>{
    try {
        const respuesta = await multas.create(req.body)
        if(respuesta.fallo){
            return res.json({
                error: respuesta.error
            })
        }else{
            return res.json({
                exito: respuesta.exito
            })
        }
    } catch (error) {
        console.error(error);
    }

}

// exports.updaMultas = async(req, res) =>{
//     try {
//         const respuesta = await multas.update(req.body)
//     } catch (error) {
//         console.error(error);
//     }
// }