const multas = require('../data-acces/multas');

exports.create = async(req, res)=>{
    const datos = req.body;

    const nuevaMulta = multas.Createmultas(datos);

    res.status(200).json({resultado: nuevaMulta});
}

exports.find = async(req, res) =>{
    
    try{
        const buscar = await multas.buscar()

        if(buscar.respuesta === false){
            res.status(404).json({resultado: "no existe ninguna multa"})
        }else{
            res.status(200).json({multas:  buscar})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(multas)
}

exports.update = async (req, res)=>{

    try {
        const id = {_id: req.params.id};
        const datos = req.body;

        if(id.respuesta === false){
            res.status(404).json({respuesta: "no encuentro el id"});
        }else{
            await multas.updateMultas(id, datos);
            res.status(200).json({multas:  "se actualio correctamente"});
        }
    } catch (e){
        res.status(500).json({error:e})
    }
};

exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const datos = req.body;

        if(id.respuesta === false){
            res.status(404).json({respuesta: "no encuentro el id"});
        }else{
            await multas.findOneAndDelete(id, datos);
            res.status(200).json({multas:  "se actualio correctamente"});
        }
        
    } catch (e) {
        res.status(500).json({error:e})

        }

};


