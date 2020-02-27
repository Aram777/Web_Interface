var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'webinterfacesqldb.mysql.database.azure.com',
    user: 'Sa@webinterfacesqldb',
    password: '!1asdfgh',
    database: 'webshopping',
    port: 3306,
    ssl:true
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected!');
});

module.exports = connection;

