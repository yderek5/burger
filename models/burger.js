// This is the burger model
// ========================
var orm = require('../config/orm');

var Burger = {
    all: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    create: function(callback) {
        orm.insertOne(function(res) {
            callback(res);
        });
    },
    update: function(callback) {
        orm.updateOne(function(res) {
            callback(res);
        });
    }
};

module.exports = Burger;