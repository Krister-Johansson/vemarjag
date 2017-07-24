'use strict';

var group = require('../business/group.business');

module.exports = {
    add: (req, res, next) => {
        group.add(req.body.group).then(function (doc) {
                res.status(200).json(doc);
            })
            .catch(function (err) {
                if (err.code !== 11000) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(403);
                }
            })
    },
    get: (req, res, next) => {
        group.get(req.params.group).then(function (doc) {
                res.status(200).json(doc);
            })
            .catch(function (err) {
                if (err !== null) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(403);
                }
            })
    },
    delete: (req, res, next) => {
        group.remove(req.body.group).then(function (doc) {
                res.status(200).json(doc);
            })
            .catch(function (err) {
                if (err !== null) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(403);
                }
            })
    }
}