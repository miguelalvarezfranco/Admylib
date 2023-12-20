const usuarios = require('../data-acces/usuarios.controller');

exports.crearUsuarios = async(req, res)=>{

    const datos = await usuarios.createUsuarios(req.body);

    // const nuevoUsuario = usuarios.crearUsuario(datos);

    res.redirect('listarUsuario');
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



exports.login = async(req, res) =>{

    const {correo, password} = req.body;
    try {
        if (!correo || !password) return res.render('landing', {error: 'Ingresa todos los datos'});
        const usu = await usuarios.infoUsuario({correo: correo}); //{email: 1, password: 1, role: 1});
        if (!usu) {
            return res.render('landing', {error: 'Este usuario no existe'});
        } else {
            const passwordIsCorrect = await bcrypt.compare(password, usu.password);
            if (!passwordIsCorrect) {
                return res.render('landing', {error: 'Contraseña incorrecta'});
            } 
        }
    } catch (error) {
        
    }
};
    

    // const info = await usuarios.infoUsuario({ correo: req.body.correo });

    
    //     const contraU = req.body.password;

    //     if(info.password == contraU){
    //         res.status(200).json({usuarios: "Ingreso de manera exitosa"});

    //     }if(info.rol == 'admin'){
    //         res.redirect("/inicio");


    //     }else if(info.rol == 'usuario'){ 
    //         res.redirect("/landing")
    //     }

        































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

    
