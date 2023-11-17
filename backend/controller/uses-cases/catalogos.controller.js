const catalogos = require("../data-acces/catalogos");

 exports.catalogoLibros = async(req, res) =>{ //nombre de la funcion que quiero hacer
    res.render("listarCatalogo") // documento que quiero mostrar
}


 exports.mostrarcatalogo = async(req, res) =>{ //nombre de la funcion que quiero hacer
    res.render("catalogo") // documento que quiero mostrar
}

    exports.producto = async (req, res) => {
    const listacatalogo = await productos.find();
     //console.log(listaproducto);

    res.render("listarcatalogo", {

    catalogo: listacatalogo
    });
    };
      exports.mostrarcatalogo = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render("mostrarcatalogo");
    };

    exports.agregaralcatalogo = (req, res) => {
    const catalogo = new productos({
        tituo: req.body.titulo,
        precio: req.precio,//         descripcion: req.body.descripcion,
        copiasdisponibles: req.body.copiasdisponibles,
        imagen: req.body.imagen,

    });

        catalogo.save();
        res.redirect("/catalogos");
        console.log('catalogos');
    };

        exports.eliminarcatalogo = async (req, res) => {
        const id = req.params.id;
        await catalogos.findByIdAndDelete({ _id: id });
        res.redirect("/catalogos");
    };

        exports.actualizarproducto = async (req, res) => {
        const nuevo = { _id: new mongoose.Types.ObjectId(), referencia: req.body.referencia, nombre: req.body.nombre, descripcion: req.body.descripcion, precio: req.body.precio, stock: req.body.stock, habilitado: req.body.habilitado, imagen: req.body.imagen };
        await catalogos.findOneAndRemove({ referencia: req.body.referencia });

        await catalogos.insertMany(nuevo);

        res.redirect("/catalogos");
    };