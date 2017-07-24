var router = require('express').Router();
var homeCtrl = require('../controllers/home.controller');

router.route('/')
  .get(homeCtrl.home);

router.route('/add')
  .get(homeCtrl.add);

module.exports = router;
