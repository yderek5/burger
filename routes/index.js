// This is the index controller
// ============================
var express = require('express');
var Burger = require('../models/burger');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
