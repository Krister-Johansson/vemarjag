var router = require('express').Router();
var homeCtrl = require('../controllers/home.controller');

router.route('/')
  .get(homeCtrl.home);

router.route('/:group')
  .get(homeCtrl.getRandomImage);
module.exports = router;