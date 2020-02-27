const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var router = express.Router();
// parse application/json
app.use(bodyParser.json());

host: "webinterfacesqldb.mysql.database.azure.com",
    user: "Sa@webinterfacesqldb",
        password: "!1asdfgh",
            database: "webshopping"

//create database connection
const conn = mysql.createConnection({
    host: 'webinterfacesqldb.mysql.database.azure.com',
    user: 'Sa@webinterfacesqldb',
    password: '!1asdfgh',
    database: 'webshopping'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

//show all products
router.get('/', (req, res) => {
    let sql = "SELECT 1 as gg ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

