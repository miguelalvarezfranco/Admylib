const usuarios = require('../data-acces/usuarios.controller');
const bcrypt = require('bcrypt')

exports.crearUsuarios = async (req, res) => {
    try {
        const correoIngresado = req.body.correo;

        // Verificar si el correo ya está registrado
        const correoExistente = await usuarios.infoUsuario({ correo: correoIngresado });

        if (correoExistente) {
            // El correo ya está registrado
            return res.status(409).send("Correo ya registrado");
        }

        // Si el correo no está en uso, procede a crear el nuevo usuario
        await usuarios.createUsuarios(req.body);

        res.cookie('rol', "usuario");
        res.redirect('/landing');
    } catch (error) {
        // Manejo de errores
        console.error(error);
        return res.status(500).send("Error interno del servidor");
    }
}


// exports.crearUsuarios = async(req, res)=>{

//     const datos = await usuarios.createUsuarios(req.body);

//     res.cookie('rol', "usuario");
//     res.redirect('/landing');

// }

exports.Tabla2 = async(req, res) =>{

    try{
        const buscarUsuario = await usuarios.buscarUsuario()

        if(buscarUsuario.respuesta === false){

            res.status(404).json({resultado: "no existe ningun usuario"})
        }else{
            res.render('listarUsuarios',{
                usuarios2 : buscarUsuario.usuarios
            })
            res.status(200).json({usuarios2: buscarUsuario});
            
        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(usuarios)

}

exports.usuario = async(req, res) =>{

    try{
        const buscarUsuario = await usuarios.buscarUsuario()

        if(buscarUsuario.respuesta === false) {

            res.status(404).json({resultado: "no existe "})
        }else{

            res.render('listarUsuarios',{
                usuarios2 : buscarUsuario.usuarios
            })
            //res.status(200).json({usuarios2: buscarUsuario});
        }
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.updateUsu = async(req, res)=>{

    try {
        const id = {_id: req.params.id };
        const datos = {
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            editorial: req.body.editorial,
        }
        if(id.respuesta === false){
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            await usuarios.updateusuarios(id, datos);
            res.status(200).json({usuarios:  "se actualizo correctamente"})
        }

    } catch (e) {
        res.status(500).json({error:e})
    }
}

exports.eliminarU = async (req, res) => {
    try {
        await usuarios.eliminarusuario(req.params.id);
        return res.redirect("/listarUsuarios");
    } catch (error) {
        console.error(error);
        }
    };



    exports.login = async (req, res) => {
        try {
            const correoIngresado = req.body.correo;
    
            // Verificar si el correo ya está registrado
            const usuarioExistente = await usuarios.infoUsuario({ correo: correoIngresado });
    
            if (!usuarioExistente) {
                // El correo no está registrado
                return res.status(404).send("Correo no registrado");
            }
    
            // Si el correo existe, verifica la contraseña
            if (usuarioExistente.password !== req.body.password) {
                // La contraseña no coincide
                return res.status(401).send("Contraseña incorrecta");
            }
    
            // Si el correo y contraseña son correctos, procede con el inicio de sesión
            if (usuarioExistente.rol === 'administrador') {
                res.cookie('rol', usuarioExistente.rol);
                return res.render('inicio');
            } else {
                res.cookie('rol', usuarioExistente.rol);
                return res.redirect('/landing');
            }
        } catch (error) {
            // Manejo de errores
            console.error(error);
            return res.status(500).send("Error interno del servidor");
        }
    }
    



    // exports.login = async (req, res) => {
    //     try {
    //         const usuarioEncontrado = await usuarios.infoUsuario({ correo: req.body.correo });
    
    //         if (!usuarioEncontrado) {
    //             // No se encontró ningún usuario con ese correo electrónico
    //             return res.status(404).send("Usuario no encontrado");
    //         }
    
    //         if (usuarioEncontrado.password !== req.body.password) {
    //             // La contraseña no coincide
    //             return res.status(401).send("Contraseña incorrecta");
    //         }
    
    //         if (usuarioEncontrado.rol === 'administrador') {
    //             res.cookie('rol', usuarioEncontrado.rol);
    //             return res.render('inicio');
    //         } else {
    //             res.cookie('rol', usuarioEncontrado.rol);
    //             return res.redirect('/landing');
    //         }
    //     } catch (error) {
    //         // Manejo de errores
    //         console.error(error);
    //         return res.status(500).send("Error interno del servidor");
    //     }
    // }
    

    // const usuarioEncontrado =  await  usuarios.infoUsuario({ correo: req.body.correo });
    // console.log(usuarioEncontrado.usuarios.rol)
    

    // if (usuarioEncontrado.usuarios.password === req.body.password ) {
    //     if (usuarioEncontrado.usuarios.rol === 'administrador'){
    //         res.cookie('rol', usuarioEncontrado.usuarios.rol);
    //         res.render('inicio');
    //     } else {
    //         res.cookie('rol', usuarioEncontrado.usuarios.rol);
    //         res.redirect('/landing');
    //     }   
    // }



exports.paginaPrincipal = (req, res)=>{
    if(req.cookies.rol === undefined){
        res.render('landing',{
            rol: undefined, 
        });
    }else if(req.cookies.rol === "administrador"){
        res.render('landing',{
            rol: "administrador", 
        });

    }else if(req.cookies.rol === "usuario"){
        res.render('landing',{
            rol: "usuario", 
        });
    }
}

exports.VistaAdministrador = (req, res)=>{
    res.render('inicio')
}

exports.borrarCookie = (req, res) => {

    // Iterar sobre la lista y borrar cada cookie{
    res.clearCookie("rol");

    res.redirect('/landing');
}


exports.comprar = (req, res) => {
    res.render('pago')
}


exports.recupe = (req, res) => {
    res.render('recuperar')
}



    
