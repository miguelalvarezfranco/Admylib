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