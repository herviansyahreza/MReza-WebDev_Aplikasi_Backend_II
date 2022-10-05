const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByName = async (req, res) => {
    try {
        const { nama } = req.body;
        const url = await urlServices.getUrlByName(nama);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
/*
const insertUrl = async (req, res) => {
    try {

        const { url, name, description } = req.body;
        const result = await urlServices.insertUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
*/

const deleteUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const result = await urlServices.deleteUrl(url);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { url, name, description } = req.body;
        const result = await urlServices.updateUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getUrlByMailAndPhone = async (req, res) => {
    try {
        const { email,telepon } = req.body;
        const url = await urlServices.getUrlByMailAndPhone(email,telepon);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const patchUrlByName = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.patchUrlByName(nama,angkatan,email,telepon,deskripsi,req.body['jenis_kelamin']);

        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteUrlByMail = async (req, res) => {
    try {
        const { email } = req.body;
        const url = await urlServices.deleteUrlByMail(email);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createpraktikan = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.createpraktikan(nama,angkatan,email,telepon,deskripsi,req.body['jenis_kelamin']);
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createBULKpraktikan = async (req, res) => {
    try {
        const url = await urlServices.createBULKpraktikan(JSON.stringify(req.body));
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    createBULKpraktikan
    /*
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
    */
}