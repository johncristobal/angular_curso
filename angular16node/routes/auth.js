const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, loginUser, renewToken } = require('../controllers/auth');
const validarData = require('../helpers/validar_campos');

const router = Router();

router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatoria').isLength({min: 6}),
    validarData
],newUser);

router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatoria').isLength({min: 6}),
    validarData
] ,loginUser);

router.get('/renew', renewToken);

module.exports = router;