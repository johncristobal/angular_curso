const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    const payload = { uid, name };
    
    return new Promise( (resolve, reject ) => {
        jwt.sign( payload,  process.env.SECRETKEY, {
            expiresIn: '24h'
        }, (error, token) => {
            if ( error ){
                reject(error);
            }else{
                resolve( token );
            }
        });
    })
}

module.exports = {generarJWT};