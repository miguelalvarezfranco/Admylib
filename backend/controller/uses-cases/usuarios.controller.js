const usuarios = require('../data-acces/usuarios.controller');

exports.crear = async(req, res)=>{

    const datos = req.body;

    // const nuevoUsuario = usuarios.crearUsuario(datos);

    res.redirect('listarUsuarios')
}

exports.usu = async(req, res) =>{

    try{
        const buscarusuario = await usuarios.buscarusuario()

        if(buscarusuario.respuesta === false) {
            res.status(404).json({resultado: "no existe ningun libro"})
        }else{
            res.render('listarUsuarios',{
                usuarios2 : buscarusuario.usuarios
            })
            
        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(usuarios)

}

exports.usuario = async(req, res) =>{

    try{
        const buscarusuario = await usuarios.buscarusuario()

        if(buscarusuario.respuesta === false) {
            res.status(404).json({resultado: "no existe ningun libro"})
        }else{
            res.render('listarUsuarios',{
                usuarios2 : buscarusuario.usuarios
            })

        }
    }catch(e){
        res.status(500).json({error:e})
    }
    console.log(usuarios)
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
        const id = req.params.id;
        if(id.respuesta === false){
            res.status(404).json({respuesta: "no encuentro el id"});
        }else{
            await usuarios.eliminarusuario({_id: id});
            res.status(200).json({usuarios:  "se elimino  correctamente"});
        }
    } catch (e) {
        res.status(500).json({error:e})
        }
};


exports.informacion = async(req, res) =>{

    try{
        const contraUsuario = req.body.password

        if(infoUsuario.password === contraUsuario) {
            res.status(404).json({resultado: "contraseña incorrecta"})
        }if(infoUsuario.rol === administrador){
            res.render('vistaadmin')       
        }else if(infoUsuario.rol === usuarios){
            res.render('landing')
        }
            
        }
        catch(e){
        res.status(500).json({error:e})
    }
        console.log(usuarios)

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

    
