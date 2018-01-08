// This is the index controller
// ============================
var express = require('express');
var burger = require('../models/burger');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
  burger.all(function (data) {
    var burgerObj = {
      burgers: data
    };
    res.render('index', burgerObj);
  });
});

router.post('/api/burgers', function (req, res) {
  burger.create(req.body.burgerName, function (data) {
    res.json(data);
  });
});

router.put('/api/burgers/:id', function (req, res) {
  burger.update(req.params.id, function (data) {
    res.json(data);
  });
});

module.exports = router;