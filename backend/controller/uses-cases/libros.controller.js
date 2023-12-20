const libros = require('../data-acces/libros');

exports.crearLibros = async(req, res)=>{

    const datos = await libros.createLibros(req.body);

    //const nuevoLibro = await libros.createLibros(datos);
    
    res.redirect('listarLibros');
}

exports.Tabla = async(req, res) =>{

    try{
        const buscarLibro = await libros.buscarLibro()

        console.log(buscarLibro);

        if(buscarLibro.respuesta === false) {

            res.status(404).json({resultado: "no existe ningun libro"})

        }else{
            res.render('listarLibros',{
                libros2 : buscarLibro.libros
            })
            res.status(200).json({libros2: buscarLibro});
        }
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.libro = async(req, res) =>{

    const buscarLibro = await libros.buscarLibro()

    try{
        console.log(buscarLibro)

        if(buscarLibro.respuesta === false) {

            res.status(404).json({resultado: "no existe"})

        } else{

            res.render('listarCatalogo',{
                libros2 : buscarLibro.libros
            })
            //res.status(200).json({libros2: buscarLibro});
        }
    }catch(e){
        res.status(500).json({error:e})

        
    }

}

exports.update = async(req, res)=>{

    try {
        const id = {_id: req.body.id };
        const datos = {
            isbn: req.body.isbn,
            titulo: req.body.titulo,
            Añodepublicacion: req.body.Añodepublicacion,
            editorial: req.body.editorial,
            copiasdisponibles: req.body.copiasdisponibles,
            precio: req.body.precio,
            idioma: req.body.idioma,
            autor: req.body.autor,
            imagen: req.body.imagen,
            materias: req.body.materias,
    
        }
        if(id.respuesta === false){
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            await libros.updatelibros(id, datos);
            return res.redirect('/listarLibros')
        }

    } catch (e) {
        res.status(500).json({error:e})
    }
}

exports.eliminarL = async (req, res) => {
    try {
        await libros.eliminarLibro(req.params.id);
        return res.redirect("/listarLibros");
    } catch (error) {
        console.error(error);
        }
};


exports.formularioLibro = async(req, res) =>{ //nombre de la funcion que quiero hacer
    res.render("libros") // documento que quiero mostrar
}

// exports.Tablalibro = async (req, res) => {
//     const TablaL = await libros.find();

//     res.render("mostrarCatalogo",{

//         libros2: TablaL
//     });
// };











