const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'mreza_backend_2',
    port: 5432,
    password: 'reza123!'
})

module.exports = databaseConfig