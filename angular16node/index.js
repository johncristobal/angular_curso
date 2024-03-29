const express = require('express');
const router = require('./routes/auth');
const cors = require('cors');
const { dbConnection } = require('./db/db');
const path = require('path');
require('dotenv').config();

//crear server - app express
const app = express();

//lectura y parse de body
app.use( express.json() );

//cors
app.use( cors() );

//rutas
app.use("/api/auth", router);

//static
app.use(express.static('public'));

//rutas angular
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

//conectar db
dbConnection();

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en ${ process.env.PORT }`);
});

