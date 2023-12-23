
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
const cors = require("cors");
const mercadopago = require('mercadopago');
const cookieparser = require('cookie-parser');

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel





// require('./backend/passport/auten-local');

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
app.use(express.static(path.join(__dirname,"/frontend/static")));
app.use(morgan("dev"));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)))

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(cors());

app.use(cookieparser());

// app.use('/api', router);



const Mirouter = require("./backend/router");
app.use("/", Mirouter);


app.listen(PORT, () => {
    console.log(`el servidor esta en linea ...!! ${PORT}`);

});



    // REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel

    mercadopago.configure({
        access_token: "TEST-4806185970195035-121423-c7a401b5be2660c2f5177c30f1e32c8c-1591378824",

    });
    

//MERCADO PAGO 

app.post("/create_preference", (req, res) => {
	let preference = {
		items: [
			{   
				title: req.body.description,
				unit_price: Number(req.body.price),
                quantity:  Number(req.body.quantity),
                
			}
		],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});

// app.get('/feedback', function (req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });

module.exports = app;

});

