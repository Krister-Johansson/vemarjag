'use strict';

var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
var connection = mongoose.createConnection(process.env.MONGODB_URI);
var Schema = mongoose.Schema;

var FacebookSchema = Schema({
    group: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    content: [{
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }]
});

module.exports = connection.model('Facebook', FacebookSchema);