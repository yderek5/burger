// This is the burger model
// ========================
var orm = require('../config/orm');

var Burger = {
    all: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    create: function (burgerName, callback) {
        orm.insertOne(burgerName, function (res) {
            callback(res);
        });
    },
    update: function (burgerId, callback) {
        orm.updateOne(burgerId, function (res) {
            callback(res);
        });
    }
};

module.exports = Burger;