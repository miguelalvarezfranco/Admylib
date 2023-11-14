const productos = require("../data-acces/productos");

exports.mostrarcatalogo = async(req, res) =>{ //nombre de la funcion que quiero hacer
    res.render("catalogo") // documento que quiero mostrar
}

    exports.producto = async (req, res) => {
    const listaproducto = await productos.find();
    console.log(listaproducto);

    res.render("listarproductos", {

        producto: listaproducto
    });
    };
     exports.mostrarproducto = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render("mostrarproducto");
    };

    exports.agregarproducto = (req, res) => {
    const producto = new Productos({
        referencia: req.body.referencia,
        nombre: req.body.nombre,//         descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado: req.body.habilitado

    });

        producto.save();
        res.redirect("/api/v1/productos");
        console.log('productos');
    };

        exports.eliminarproducto = async (req, res) => {
        const id = req.params.id;
        await Productos.findByIdAndDelete({ _id: id });
        res.redirect("/api/v1/productos");
    };

        exports.actualizarproducto = async (req, res) => {
        const nuevo = { _id: new mongoose.Types.ObjectId(), referencia: req.body.referencia, nombre: req.body.nombre, descripcion: req.body.descripcion, precio: req.body.precio, stock: req.body.stock, habilitado: req.body.habilitado, imagen: req.body.imagen };
        await Productos.findOneAndRemove({ referencia: req.body.referencia });

        await Productos.insertMany(nuevo);

        res.redirect("/api/v1/productos");
    };