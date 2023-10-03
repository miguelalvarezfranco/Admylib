const autores = require('../data-acces/autores');

exports.registerAutores = async(req, res)=>{
    const datos = req.body;

    const nuevoRgeistro = autores.registerAutor(datos);

    res.status(200).json({resultado: nuevoRgeistro});

}

exports.findListar = async(req, res) =>{
    
    try{
        const listar = await autores.listar()

        if(listar.respuesta === false) {
            res.status(404).json({resultado: "no existe ninguna multa"})
        }else{
            res.status(200).json({autores:  listar})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.actualizarAutor = async(req, res)=>{

    try {
        const filtro = {_id: req.params.id };
        const datos = {
            nombreCompleto: req.body.nombreCompleto,
            fechaNacimiento: req.body.fechaNacimiento,
            fechaDeceso: req.body.fechaDeceso

        }
        if(filtro.respuesta === false){
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            await autores.updateAutor(filtro, datos);
            res.status(200).json({autores:  "Actualizado correctamente"})
        }

        
    } catch (e) {
        res.status(500).json({error:e})
    }

}