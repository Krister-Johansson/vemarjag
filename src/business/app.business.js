'use strict';
var Facebook = require('../models/facebook.model');

module.exports = {
    addGroup: function (obj, cb) {
        var fb = new Facebook();

        fb.group = obj.group;
        var promise = fb.save();

        promise.then(function (doc) {
            console.log(doc);
            cb(doc);
        });
    },

    getGroup: function (obj, cb) {
        cb(obj);
    },

    removeGroup: function (obj, cb) {
        cb(true);
    },

    addImage: function (obj, cb) {
        cb(obj);
    },

    getImage: function (obj, cb) {
        cb(obj);
    },

    removeImage: function (obj, cb) {
        cb(true);
    },

    randomImage: function () {
    }
}