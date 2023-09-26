const bibliotecologos = require('../../models/bibliotecologos.model');

exports.registrarBiblio = async(bibliodata)=>{
    return await new  bibliotecologos(bibliodata).save();
}