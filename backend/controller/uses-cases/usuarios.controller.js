const usuarios = require('../data-acces/usuarios.controller');
const bcrypt = require('bcrypt')

exports.crearUsuarios = async(req, res)=>{

    const datos = await usuarios.createUsuarios(req.body);

    res.cookie('rol', "usuario");
    res.redirect('/landing');

}

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
        return res.redirect("/listarUsuario");
    } catch (error) {
        console.error(error);
        }
    };



    // function verificarRol(usuario) {
    //     if ("rol" in usuario) {
    //         return usuario.rol;
    //     } else {
    //         return null;
    //     }
    //     }



exports.login = async(req, res) =>{


    const usuarioEncontrado =  await  usuarios.infoUsuario({ correo: req.body.correo });
    console.log(usuarioEncontrado.usuarios.rol)
    

    if (usuarioEncontrado.usuarios.password === req.body.password ) {
        if (usuarioEncontrado.usuarios.rol === 'administrador'){
            res.cookie('rol', usuarioEncontrado.usuarios.rol);
            res.render('inicio');
        } else {
            res.cookie('rol', usuarioEncontrado.usuarios.rol);
            res.redirect('/landing');
        }   
    }
}



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








    






        































// exports.infoUsuario =  (req, res) => {

 
//     const contra = req.body.password;
//     const email = req.body.email;

    
//     if(usuarios.buscarUsuario.password === contra){

//     }
    
//     if(usuarios.buscarUsuario.email === email ){

//         res.status(200).json({buscarUsuario: ''});

//     // }else if(usuarios.buscarUsuario.password === 'miguel123'){
//         res.redirect("vistaadmin");
//         // res.render('mostrarCatalogo');
    
//     };
// }

    
