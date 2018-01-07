// ORM setup
// ===========================
var connection = require('./connection');

var orm = {
     selectAll: function(callback) {
         var queryStr = "SELECT * FROM burgers";
         connection.query(queryStr, function(err, res, fields) {
             if (err) throw err;
             callback(res);
         });
     },
     insertOne: function(callback) {
         var queryStr = 'INSERT INTO burgers (burger_name) VALUES ("${burgerName}")';
         connection.query(queryStr, function(err, res, fields) {
             if (err) throw err;
             callback(res);
         });
     },
     updateOne: function(callback) {
         var queryStr = "UPDATE burgers SET devoured=true WHERE burger_id=${burgerId}";
         connection.query(queryStr, function(err, res, fields) {
             if (err) throw err;
             callback(res);
         });
     }
};

module.exports = orm;