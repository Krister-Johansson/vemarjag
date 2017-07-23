var router = require('express').Router();
var homeCtrl = require('../controllers/home.controller');

router.route('/')
  .get(homeCtrl.home)

module.exports = router;
