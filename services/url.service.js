const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM mreza_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (name) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM mreza_webdev WHERE nama='${name}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM links WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByMailAndPhone = async (email,telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM mreza_webdev WHERE email='${email}' and telepon='${telepon}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const patchUrlByName = async (nama,angkatan,email,telepon,deskripsi,jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE mreza_webdev SET jenis_kelamin='${jenis_kelamin}', angkatan='${angkatan}', email='${email}', telepon='${telepon}', deskripsi='${deskripsi}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deleteUrlByMail = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM mreza_webdev WHERE "email"='${email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM praktikan_webdev WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const createpraktikan = async (nama,angkatan,email,telepon,deskripsi,jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `insert into mreza_webdev values ('${nama}','${jenis_kelamin}','${angkatan}','${email}','${telepon}','${deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const createBULKpraktikan = async (DON) => {
    try {
        let BOSS = []
        JSON.parse(DON,(a,b)=>{BOSS.push(b)})
        for (let a=0;a<(BOSS.length-1)/7;a++){
            // This is not safe, but it's just an example
            const query = `insert into mreza_webdev values ('${BOSS[a*7]}','${BOSS[(a*7)+1]}','${BOSS[(a*7)+2]}','${BOSS[(a*7)+3]}','${BOSS[(a*7)+4]}','${BOSS[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating URL');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
            // This is safer. It uses a parameterized query
            // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
            // const result = await databaseQuery(query, [name]);    
        }
        return {
            message: 'URL updated successfully',
        };
        
    } catch (error) {
        return error
    }
    //DON = membaca json
    //BOSS = isi value dari DON
}

/*
const insertUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO links (url, name, description) VALUES ('${url}', '${name}', '${description}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO links (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting URL');
        }
        return {
            message: 'URL inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (url) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM links WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM links WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE links SET name='${name}', description='${description}' WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE links SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}
*/
module.exports =  {
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