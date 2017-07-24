'use strict';

var content = require('../business/content.business');

module.exports = {
    add: (req, res, next) => {
        content.add(req.params.group, req.body.name, req.body.image).then(function (doc) {
                res.status(200).json(doc);
            })
            .catch(function (err) {
                res.sendStatus(500);
            })
    },
    get: (req, res, next) => {
        content.get(req.params.group, req.params.content).then(function (doc) {
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
        content.remove(req.params.group, req.params.content).then(function (doc) {
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