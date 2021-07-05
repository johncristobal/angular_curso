const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require("bcryptjs");

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
        

        //salvamos pass
        await userNew.save();

        //resp ok
        return res.json({
            ok: true,
            msg: "Crear usuario new",
            userNew
        });

    }catch(e){
        return res.status(500).json({
            ok: false,
            msg: "Algo no salio como esperabamos"
        });
    }


};

const loginUser = (req = request, res = response) => {    //login suusario

    const { email, password } = req.body;    

    return res.json({
        ok: true,
        msg: "Login usuario"
    });
};

const renewToken = (req, res) => {    //validar token

    return res.json({
        ok: true,
        msg: "Token renew"
    });
};

module.exports = {
    newUser,
    loginUser,
    renewToken
}


