'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FacebookSchema = new Schema({
    group: { type: String, required: true },
    content: [{
        name: { type: String, required: true },
        image: { type: String, required: true }
    }]

});

mongoose.model('Facebook', FacebookSchema);