const express = require('express');
const app = express();
const {body,  validationResult} = require('express-validator');
const morgan = require("morgan"); // para gestionar las request procesadas//
const path = require("path");
const dotenv = require("dotenv");
const router = require("./backend/router");
const multer = require("multer");

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
                url:"http://localhost:7778",
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
app.use(express.static(path.join(__dirname,"/frontend/static")));
app.use(morgan("dev"));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)))

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// app.use('/api', router);

const Mirouter = require("./backend/router");
app.use("/", Mirouter);


app.listen(PORT, () => {
    console.log(`el servidor esta en linea ...!! ${PORT}`);

});

app.post('/registrarlibro',[
    body('isbn', 'ingrese solo numeros')
    .exists()
    .isNumeric({min:10}),
    body('titulo','ingrese solo letras')
    .exists()
    .isLength({min:100}),
    body('Añodepublicacion','ingrese un año correcto')
    .exists()
    .isLength({min:50}),
    body('editorial','ingrese una editorial')
    .exists()
    .isLength({min:50}),
    body('copiasdisponibles','ingrese numeros ')
    .exists()
    .isNumeric({min:50}),
    body('precio','en este campo no se permiten letras')
    .exists()
    .isNumeric({min:100}),
    body('idioma','ingrese solo letras')
    .exists()
    .isLength({min:100}),
    body('autor','ingrese un solo letras')
    .exists()
    .isLength({min:100}),
    body('iamgen','ingrese solo  imagenes ')
    .exists()
    .isLength({min:80}),
    body('materias','ingrese solo letras ')
    .exists()
    .isLength({min:100}),
],(req, res)=>{
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     res.status(400).json({ errors: errors.array() });
    //     console.log(errors)
    // }
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array
        res.render('libros', {validaciones:validaciones, valores:valores})
    }else{
        res.send('¡Validacion exitosa!')
    }
})

module.exports = app;

// app.get("/libros", function (req, res) {
//     Libro.find({}, function (err, libros) {
//     res.status(200).send(libros);
//     });
// });


// app.get("/",(req, res)=>{
//     res.render('formuregistro');
// })