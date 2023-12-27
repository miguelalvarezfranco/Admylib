
const express = require('express');
const app = express();
const {body,  validationResult} = require('express-validator');
const morgan = require("morgan"); // para gestionar las request procesadas//
const path = require("path");
const dotenv = require("dotenv");
const router = require("./backend/router");
const multer = require("multer");
const passport = require('passport');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const {v4: uuidv4} = require('uuid');

//swagger
const swaggerSpec ={
    definition: {
        openapi: "3.0.0",
        info:{
            title: "API Node",
            version: "1.0.0",
        },
        servers:[
            {
                url:"http://localhost:7777",
            },
        ]
    },
    apis: [`${path.join(__dirname, "./backend/router.js")}`],
    
}


const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("swagger-jsdoc");

dotenv.config();
const PORT = process.env.PORT || 2000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/views/pages"));
app.use(express.static(path.join(__dirname,"./frontend/static")));
app.use('/static', express.static('./frontend/static'))
app.use(morgan("dev"));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)))

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//MULTER IMAGNES 

const tiposDeImagenes = ['image/png', 'image/jpeg', 'image/jpg'];
const storage =  multer.diskStorage({
    destination: path.join(__dirname, './frontend/static/fotos'),
    filename: (req, file, cb, res) =>{
        cb(null, uuidv4()+ path.extname(file.originalname)); // generar id de imagen cada vez que se suba que se suba una no quede erepetida
    },
});

// flitrar Archivo, y mirar tipo de imagen que sea solo de los que estan permitidos, mimetype tipos de imagenes 
const fileFilter = (req, file, cb)=>{
    if(tiposDeImagenes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error('tipo documento no valido'));
    }
}

const upload = multer({storage, fileFilter}).single('image'); // se llaman las funciones anteriorente creadas 

//llamar y que suba la imagen
app.use((req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
        // error de multer
        res.status(400).json({error: err.message});
        } else if (err) {
        // error de tipo de archivo
        res.status(500).send('<script>alert( "error '+ err.message +'"); window.history.back(); </script>');
        
        } else {
        // todo salio bien
        next();
        }
    })
    });

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));



app.use(cookieparser());


const Mirouter = require("./backend/router");
app.use("/", Mirouter);


app.listen(PORT, () => {
    console.log(`el servidor esta en linea ...!! ${PORT}`);

});


module.exports = app;


