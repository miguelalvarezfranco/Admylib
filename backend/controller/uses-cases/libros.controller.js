const libros = require('../data-acces/libros');

exports.creaLibros = async(req, res)=>{
    const datos = req.body;

    const nuevoLibro =  libros.createLibros(datos);

    res.status(200).json({resultado: nuevoLibro});

    
}


exports.libro = async(req, res) =>{
    
    try{
        const buscarLibro = await libros.buscarLibro()

        if(buscarLibro.respuesta === false) {
            res.status(404).json({resultado: "no existe ningun libro"})
        }else{
            res.render('listarCatalogo',{
                libro : buscarLibro.libros
            })

            // res.status(200).json({libros:  buscarLibro})
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
            Añodepublicacion: req.body.Añodepublicacion,
            copiasdisponibles: req.body.copiasdisponibles,
            precio: req.body.precio,
            imagen: req.body.imagen,
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

exports.eliminarL = async (req, res) => {
    try {
        const id = req.params.id;
        if(id.respuesta === false){
            res.status(404).json({respuesta: "no encuentro el id"});
        }else{
            await libros.eliminarLibro({_id: id});
            res.status(200).json({libros:  "se elimino  correctamente"});
        }
    } catch (e) {
        res.status(500).json({error:e})
        }
};

exports.formularioLibro = async(req, res) =>{ //nombre de la funcion que quiero hacer
    res.render("libros") // documento que quiero mostrar
}




