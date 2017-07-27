'use strict';
var Facebook = require('../models/facebook.model');
var slug = require('slug');

module.exports = {
    add: (group) => {
        return new Promise((fulfill, reject) => {
            new Facebook({
                    group: group,
                    slug: slug(group).toLocaleLowerCase()
                }).save().then((doc) => {
                    fulfill(doc);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    list: (group) => {
        return new Promise((fulfill, reject) => {
            Facebook.find().then((doc) => {
                    fulfill(doc);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    get: (group) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase()
                }).then((doc) => {
                    fulfill(doc);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    remove: (group) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase()
                }).then((doc) => {
                    if (doc) {
                        doc.remove();
                    } else {
                        reject(null);
                    }

                    fulfill(doc);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}