const libros = require('../data-acces/libros');

exports.creaLibros = async(req, res)=>{
    const datos = req.body;

    const nuevoLibro =  libros.createLibros(datos);

    res.status(200).json({resultado: nuevoLibro});
}

exports.find = async(req, res) =>{
    
    try{
        const buscarLibro = await libros.buscarLibro()

        if(buscarLibro.respuesta === false) {
            res.status(404).json({resultado: "no existe ningun libro"})
        }else{
            res.status(200).json({libros:  buscarLibro})
        }
    }catch(e){
        res.status(500).json({error:e})
    }

    console.log(libros)

}

exports.update = async(req, res)=>{

    try {
        const id = {_id: req.params.id };
        const datos = {
            Isbn: req.body.Isbn,
            titulo: req.body.titulo,
            autor: req.body.autor,
            editorial: req.body.editorial,
            materias: req.body.materias,
            fechaPublicacion: req.body.fechaPublicacion,
            copiasDisponibles: req.body.copiasDisponibles,
            idioma: req.body.idioma,
            
        }
    

        if(id.respuesta === false){
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            await libros.updatelibros(id, datos);
            res.status(200).json({libros:  "se actualizo correctamente"})
        }
        
    } catch (e) {
        res.status(500).json({error:e})
    }


}