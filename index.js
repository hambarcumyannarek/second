const express = require('express');
// const pool = require('./DB/database');
const app = express();


app.get('/', async (req, res) => {
    // const name = await pool.query('select * from users'); + name[0][0].lastname
    res.send('hello Narek- ');
})

app.listen(3001, () => {
    console.log('your server is working');
})

/* DB_NAME=railway
DB_PASSWORD=aAh4eH636h-gHfHegGaB-42Ecfb5agd2
HOST=viaduct.proxy.rlwy.net
PORT=3000
USER=root */