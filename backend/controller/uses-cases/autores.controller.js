const autores = require('../controller/data-acces/autores');

exports.registerAutores = async(register)=>{
    const{nombreCompleto, fechaNacimiento, fechaDeseso} = register;

    const newregister = autores.registerAutor(register);

    return newregister;
}