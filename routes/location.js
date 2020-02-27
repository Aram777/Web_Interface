var express = require('express');
var router = express.Router();
var db = require('../config/database');
var bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all location. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM location ";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(rows)
    })
});
/*get method for fetch single location*/
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM location WHERE location_id=${id}`;
    db.query(sql, function (err, row, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(row[0])
    })
});

/*post method for create location*/
router.post('/create', function (req, res, next) {
    var name = req.body.name;
    var parent_id = req.body.parent_id;
    var sql = '';
    if (parent_id > 0) {

        sql = `INSERT INTO location (name, parent_id) VALUES ("${name}", "${parent_id}")`;

    }
    else {
        sql = `INSERT INTO location (name) VALUES ("${name}")`;

    }
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', id: result.insertId })
    })
});

/*put method for update location*/
router.put('/update/:id', function (req, res, next) {
    var id = req.params.location_id;
    var name = req.body.name;
    var parent_id = req.body.parent_id;
    
    var sql = `UPDATE category SET name="${name}", parent_id=${parent_id} WHERE location_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: sql })
        }
        res.json({ 'status': 'success' })
    })
});

/*delete method for delete location*/
router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `DELETE FROM category WHERE location_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success' })
    })
})
module.exports = router;

