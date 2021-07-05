const express = require('express');
const router = require('./routes/auth');
const cors = require('cors');
const { dbConnection } = require('./db/db');
require('dotenv').config();

//crear server - app express
const app = express();

//cors
app.use( cors() );

//lectura y parse de body
app.use( express.json() );

//rutas
app.use("/api/auth", router);

//static
app.use(express.static('public'));

//conectar db
dbConnection();

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en ${ process.env.PORT }`);
});

