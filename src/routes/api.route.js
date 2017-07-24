var router = require('express').Router();
var groupCtrl = require('../controllers/api.group.controller');
var contentCtrl = require('../controllers/api.content.controller');

router.route('/group')
    .post(groupCtrl.add)

router.route('/group/:group')
    .get(groupCtrl.get)
    .delete(groupCtrl.delete)
    .post(contentCtrl.add);
    
router.route('/group/:group/:content')
    .get(contentCtrl.get)
    .delete(contentCtrl.delete);

module.exports = router;