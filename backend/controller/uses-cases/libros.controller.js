const libros = require('../data-acces/libros');

exports.creaLibros = async(informacion)=>{
    const{isbn, titulo, autor, editorial, materias, fechaPublicacion, copiasDisponibles, idioma } = informacion;

    const nuevoLibro = libros.createLibros(informacion);

    return nuevoLibro;
}