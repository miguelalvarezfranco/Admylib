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
}



exports.update = async(req, res)=>{
    const id = {_id: req.params.id};
    const actualizar = req.body;
    const actualizarMulta  = await multasdata.update(id, actualizar);
    res.status(200).json({multas: 'se actualizo con exito'});
}

