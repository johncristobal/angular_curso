const mongoose = require('mongoose');

const dbConnection = async () => {

    try{
        await mongoose.connect( process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("Conexion lista");
    }catch (error){
        console.log(error);
        throw new Error("No pudo conectar a base datos");
    }
}

module.exports = {
    dbConnection
}