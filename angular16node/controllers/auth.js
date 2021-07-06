const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const newUser = async (req = request, res = response) => {

    try{

        const { name, email, password } = req.body;    

        //verificar email
        const emailExist = await User.findOne({ email });
        if(emailExist){
            return res.status(400).json({
                ok: false,
                msg: "El correo ya existe"
            });
        }
    
        //generar usuario en db
        const userNew = new User(req.body);

        //hash pass
        const salt = bcryptjs.genSaltSync();    //numero de vueltas al pass
        userNew.password = bcryptjs.hashSync( password, salt );    //ciframos el password

        //jwt para metodo auth
        const jwt = await generarJWT( userNew.id, name);

        //salvamos pass
        await userNew.save();

        //resp ok
        return res.json({
            ok: true,
            msg: "Crear usuario new",
            userNew,
            jwt
        });

    }catch(e){
        return res.status(500).json({
            ok: false,
            msg: "Algo no salio como esperabamos"
        });
    }


};

const loginUser = async (req = request, res = response) => {    //login suusario

    const { email, password } = req.body;    

    try{

        const userDB = await User.findOne( { email });
        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: "El correo no existe"
            });
        }

        // pass match 
        const valuePass = await bcryptjs.compareSync( password, userDB.password );
        if(!valuePass){
            return res.status(400).json({
                ok: false,
                msg: "El password no es valido"
            });
        }

        //jwt para metodo auth
        const jwt = await generarJWT( userDB.id, userDB.name);

        return res.json({
            ok: true,
            userDB,
            jwt
        });

    }catch( err ){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: "Hable con admin"
        })
    }  
};

const renewToken = async (req, res) => {    //validar token

    const { uid, name } = req;

    //jwt para metodo auth
    const jwt = await generarJWT(  uid, name);

    return res.json({
        ok: true,
        msg: "Token renew",
        jwt
    });
};

module.exports = {
    newUser,
    loginUser,
    renewToken
}
