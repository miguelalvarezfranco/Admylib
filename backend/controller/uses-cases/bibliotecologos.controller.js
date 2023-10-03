const bibliotecologos = require('../data-acces/bibliotecologos');

exports.Registrar = async(req, res)=>{
    const datos = req.body;

    const nuevoBibliotecologo = bibliotecologos.registrarBiblio(datos);

    res.status(200).json({resultado: nuevoBibliotecologo});
}

exports.findB = async(req, res) =>{
    
    try{
        const buscarB = await bibliotecologos.buscarB()

        if(buscarB.respuesta === false) {
            res.status(404).json({resultado: "no existe ninguna multa"})
        }else{
            res.status(200).json({bibliotecologos:  buscarB})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(bibliotecologos)
}

exports.updateB = async(req, res)=>{

    try {
        const filtro = {_id: req.params.id };
        const datos = {
            documento: req.body.documento,
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: req.body.password,
            horarioEntrada: req.body.horarioEntrada,
            horarioSalida: req.body.horarioSalida,
        
        }

        if(filtro.respuesta === false){
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            await bibliotecologos.updateBiblio(filtro, datos);
            res.status(200).json({bibliotecologo:  "se actualizo correctamente"})
        }
        
    } catch (e) {
        res.status(500).json({error:e})
    }


}