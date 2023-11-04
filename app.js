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
    res.send('hello ' + name[0][0].name);
})

app.listen(3001, () => {
    console.log('your server is working');
})