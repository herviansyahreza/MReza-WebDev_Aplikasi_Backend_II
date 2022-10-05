const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    body('nama').isLength({min: 8}),
    validator
]

const getUrlByMailAndPhone  = [
    body('email').isEmail(),
    body('telepon').isLength(12),
    validator
]

const patchUrlByName  = [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const deleteUrlByMail  = [
    body('email').isEmail(),
    validator
]

const createpraktikan  = [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const createBULKpraktikan  = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['P','L']),
    body('*.angkatan').custom((value)=>value>2018 ? true:false),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').custom((value)=>value=='' ? false:true),
    validator
]
/*
const insertUrl =  [
    body('url').isURL(),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]

const deleteUrl = [
    body('url').isURL(),
    validator
]

const updateUrl = [
    body('url').isURL().notEmpty().withMessage('Url is required'),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]
*/

module.exports = {
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    createBULKpraktikan

    /*
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
    */
}