const express = require('express');
const app = express();
const morgan = require("morgan"); // para gestionar las request procesadas//
const path = require("path");
const dotenv = require("dotenv");
const router = require("./backend/router");

dotenv.config();
const PORT = process.env.PORT || 2000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/views/pages"));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/', router);




app.listen(PORT, () => {
    console.log(`el servidor esta en linea ...!! ${PORT}`);



});







app.get("/",(req, res)=>{
    res.render('formuregistro');
})