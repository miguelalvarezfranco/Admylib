const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/usuarios.models');

passport.serializeUser((usuario, done) =>{
    done(null, usuario.id)
});

passport.deserializeUser(async(id, done) =>{
    const usuario = await usuario.findById(id);
    done(null, usuario);
});


passport.use('local-inicio', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) =>{
    const newusuario = new User();
    newusuario.usuario = usuario;
    newusuario.email = email;
    newusuario.password = newusuario.encryptedPassword(password);
    await newusuario.save();
    done(null, newusuario);
    // const user = User.findOne({email: email});
    // if(user){
    //     return done(null, false, )
    // }


    
}))

