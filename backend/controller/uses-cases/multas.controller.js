const multas = require('../data-acces/multas');

exports.create = async(req, res)=>{
    const datos = req.body;

    const nuevaMulta = multas.Createmultas(datos);

    res.status(200).json({resultado: nuevaMulta});
}

exports.find = async(req, res) =>{
    
    try{
        const buscar = await multas.buscar()

        if(buscar.respuesta === false) {
            res.status(404).json({resultado: "no existe ninguna multa"})
        }else{
            res.status(200).json({multas:  buscar})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(multas)
}

exports.update = async(req, res)=>{

    try {
        const filtro = {_id: req.body.id };
        const datos = {
            tiempoSancion: req.body.tiempoSancion,
            motivo: req.body.motivo
        }
        const updateMultas  = await multas.updateMultas(filtro, datos);
        console.log(updateMultas)
        if(id.respuesta === false){
            res.status(404).json({respuesta: "no se actualizo"})
        }else{
            res.status(200).json({multas:  updateMultas})
        }
        
    
    } catch (e) {
        res.status(500).json({error:e})

    }


}


// exports.eliminarMulta = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await multas.findOneAndDelete({ _id: id });
//     } catch (error) {
        
//     }

// };


