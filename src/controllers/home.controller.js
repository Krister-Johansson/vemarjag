'use strict';
const app = require('../business/app.business');
const group = require('../business/group.business');
const scraper = require('../business/scraper.busuness');

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

                res.render('vemardu', { content: content });
            }
        }).catch((err) => {
            res.redirect('/');
        });
    },
    scrape: (req, res, next) => {
        scraper(req.params.group).then((content) => {
            if (content === null) {
                res.sendStatus(400);
            } else {
                res.sendStatus(200);
            }
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    },
}