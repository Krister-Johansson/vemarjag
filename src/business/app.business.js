'use strict';
const Facebook = require('../models/facebook.model');
const slug = require('slug');
const scraper = require('./scraper.busuness');

module.exports = {
    getRandomImage: (group) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                slug: slug(group).toLocaleLowerCase()
            }).then((doc) => {
                if (doc === null || doc.content.length == 0) {
                    reject(null);
                } else {
                    scraper(doc).then((x) => {
                        var content = doc.content[Math.floor(Math.random() * doc.content.length)];

                        content.url = doc.url;
                        content.group = doc.group;

                        fulfill(content);
                    }).catch((err) => reject(err));
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}