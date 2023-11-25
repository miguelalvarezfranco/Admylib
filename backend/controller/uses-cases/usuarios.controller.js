const usuarios = require('../data-acces/usuarios.controller');

exports.crear = async(req, res)=>{
    const datos = req.body;

    const nuevoUsuario = usuarios.crearUsuario(datos);

    res.status(200).json({resultado: nuevoUsuario});

    
}



exports.infoUsuario = async (req, res) => {
    const infoUsu = await usuarios.findOne({ email: req.body.Correo });

    console.log(infoUsu);
    
    const contraUsuario = req.body.password
    
    if(infoUsu.password === contraUsuario){
        console.log(true);
    }
    
    if(infoUsu.rol === 'Usuario' ){
        res.render("landing");
    }else if(infoUsu.rol === 'Admin'){
        res.render('mostrarCatalogo');
    }
    
    };
    

