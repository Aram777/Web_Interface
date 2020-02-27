const sql = require("./db");
var connection = mysql.createConnection(databaseOptions);

var categorydb =
{
    getAllcategories: function (callback) {
        sql.query("SELECT 12 as ff ", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("customers: ", res);
            result(null, res);
        });
      
    }
};
module.exports = categorydb;
