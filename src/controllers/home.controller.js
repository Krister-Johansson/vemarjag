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
                res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
                res.setHeader('Cache-Control', 'post-check=0, pre-check=0');
                res.setHeader('Pragma', 'no-cache');
                console.log(content);

                res.render('vemardu', {content: content});
            }
        }).catch((err) => {
            res.redirect('/');
        });
    }
}