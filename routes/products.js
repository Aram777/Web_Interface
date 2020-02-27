var express = require('express');
var router = express.Router();
var db = require('../config/database');
var bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all products. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM products ";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(rows)
    })
});
/*get method for fetch single products*/
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM products WHERE products_id=${id}`;
    db.query(sql, function (err, row, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json(row[0])
    })
});

/*post method for create location*/
router.post('/create', function (req, res, next) {
    var category_id = req.body.category_id;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var deliverytype = req.body.deliverytype;
    var shopuser_id = req.body.shopuser_id;
    var location_id = req.body.location_id;

    var sql = `INSERT INTO products (category_id, title, description, price, deliverytype, shopuser_id, location_id)
VALUES ("${category_id}", "${title}", "${description}","${price}", "${deliverytype}", "${shopuser_id}","${location_id}")`;

    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', id: result.insertId })
    })
});

/*put method for update products*/
router.put('/update/:id', function (req, res, next) {
    var id = req.params.location_id;
    var name = req.body.name;
    var parent_id = req.body.parent_id;

    var sql = `UPDATE location SET name="${name}" WHERE location_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: sql })
        }
        res.json({ 'status': 'success' })
    })
});

/*delete method for deactive products*/
router.put('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `UPDATE products SET status=1 WHERE products_id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success' })
    })
})
module.exports = router;

