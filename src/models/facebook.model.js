'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var FacebookSchema = new Schema({
    group: { type: String, required: true },
    content: [{
        name: { type: String, required: true },
        image: { type: String, required: true }
    }]
});
module.exports = mongoose.model('Facebook', FacebookSchema);