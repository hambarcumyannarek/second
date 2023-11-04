const express = require('express');
const { createPool } = require('mysql2/promise');
const app = express();

const pool = createPool({
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.USER
})

app.get('/', async (req, res) => {
    const name = await pool.query('select * from users');
    res.send('hello Narek- ' + name[0][0].lastname);
})

app.listen(3001, () => {
    console.log('your server is working');
})

/* DB_NAME=railway
DB_PASSWORD=aAh4eH636h-gHfHegGaB-42Ecfb5agd2
HOST=viaduct.proxy.rlwy.net
PORT=3000
USER=root */