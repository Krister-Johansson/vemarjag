'use strict';

var bll = require('../business/app.business');

module.exports = {
    home: function (req, res, next) {
        res.render('index');
    },
    add: function (req, res, next) {
        bll.addGroup({
            group: 'test', function(data) {
                console.log(data);
                res.render('index');
            }
        })
    }
}