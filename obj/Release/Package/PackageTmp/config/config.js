var mysql = require('mysql');
port = process.env.PORT || 4205;

if (port === 4205) {

    var connection = mysql.createConnection({
        host: 'webinterfacesqldb.mysql.database.azure.com',
        port: 3306,
        user: 'Sa@webinterfacesqldb',
        password: '!1asdfgh',
        database: 'webshopping',
        insecureAuth: true
    });
} else {

    //same as above, with live server details
}

connection.connect();

module.exports = connection;

