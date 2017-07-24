'use strict';
var Facebook = require('../models/facebook.model');
var slug = require('slug');

module.exports = {
    add: (group, name, image) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase()
                }).then((doc) => {
                    doc.content.push({
                        name: name,
                        image: image
                    });

                    doc.save().then((doc) => {
                            fulfill(doc);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    get: (group, _id) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase(),
                    'content._id': _id
                }).then((doc) => {
                    if (doc !== null) {
                        var content = doc.content.filter((x) => {
                            return x._id == _id;
                        });

                        if (content.length == 0) {
                            reject(null);
                        } else {
                            fulfill(content[0]);
                        }
                    } else {
                        reject(null);
                    }

                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    remove: (group, _id) => {
        return new Promise((fulfill, reject) => {
            Facebook.findOne({
                    slug: slug(group).toLocaleLowerCase(),
                    'content._id': _id
                }).then((doc) => {
                    if (doc != null && doc.content.length > 0) {
                        var content = doc.content.filter((x) => {
                            return x._id == _id;
                        });

                        if (content.length == 0) {
                            reject(null);
                        } else {
                            doc.content.pull(content[0])
                            doc.save().then((doc) => {
                                    fulfill(doc);
                                })
                                .catch((err) => {
                                    reject(err);
                                });
                        }

                    } else {
                        reject(null);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}