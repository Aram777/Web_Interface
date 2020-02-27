var express = require('express');
var router = express.Router();
var db = require('../config/database');
var bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all category. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM category ";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(rows)
    })
});
/*get method for fetch single category*/
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM category WHERE category_id=${id}`;
    db.query(sql, function (err, row, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(row[0])
    })
});

/*post method for create category*/
router.post('/create', function (req, res, next) {
    var name = req.body.name;
    var parent_id = req.body.parent_id;
    var sql = '';
    if (parent_id > 0) {

        sql = `INSERT INTO category (name, parent_id) VALUES ("${name}", "${parent_id}")`;

    }
    else {
        sql = `INSERT INTO category (name) VALUES ("${name}")`;

    }
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', id: result.insertId })
    })
});

/*put method for update category*/
router.put('/update/:id', function (req, res, next) {
    var id = req.params.category_id;
    var name = req.body.name;
    var parent_id = req.body.parent_id;
    
    var sql = `UPDATE category SET name="${name}", parent_id=${parent_id} WHERE category_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: sql })
        }
        res.json({ 'status': 'success' })
    })
});

/*delete method for delete category*/
router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `DELETE FROM category WHERE category_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success' })
    })
})
module.exports = router;

