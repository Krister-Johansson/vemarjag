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
                    const content = doc.content[Math.floor(Math.random() * doc.content.length)];
                        fulfill({
                            image: content.image,
                            name: content.name,
                            url: process.env.DOMAIN_NAME + '/' + doc.slug,
                            redirect: doc.url,
                            group: doc.group,
                            interval: process.env.INTERVAL || 5000
                        });
                    scraper(doc).then((x) => console.log(x)).catch((x) => console.log(x));
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}