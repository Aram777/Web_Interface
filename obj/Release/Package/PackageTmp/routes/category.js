var express = require('express');
var router = express.Router();
var db = require('../config/database');
var bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all products. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM category ";
   
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(rows)
    })
});


module.exports = router;

