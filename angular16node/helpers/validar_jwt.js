const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    const tok = req.header('x-token');
    if(!tok){
        return res.status(401).json({
            ok: false,
            msg: "Error en el token"
        });
    }

    try{

        const { uid, name } = jwt.verify( tok , process.env.SECRETKEY );

        req.uid = uid;
        req.name = name;

    }catch(err){
        console.log(err);
        return res.status(401).json({
            ok: false,
            msg: "Token no valido"
        })
    }
    
    next();
}

module.exports = {
    validarJWT
}