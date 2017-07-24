'use strict';
var app = require('../business/app.business');

module.exports = {
    home: (req, res, next) => {
        res.render('index');
    },
    getRandomImage: (req, res, next) => {
        app.getRandomImage(req.params.group).then((content) => {
            if (content === null) {
                res.redirect('/');
            } else {
                res.render('vemardu', content);
            }
        }).catch((err) => {
            res.redirect('/');
        });
    }
}