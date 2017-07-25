'use strict';
var Facebook = require('../models/facebook.model');
var slug = require('slug');

module.exports = {
    getRandomImage: (group) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase()
                }).then((doc) => {
                    if (doc === null || doc.content.length == 0) {
                        reject(null);
                    } else {
                        var content = doc.content[Math.floor(Math.random() * doc.content.length)];
                        fulfill(content);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}