const dotenv = require('dotenv').config();
const async = require('async');
const group = require('./business/group.business');
const scraper = require('./business/scraper.busuness');
let interval = 1000;

function getGroups() {
    group.list().then(doc => {
        interval = doc.length * interval;
        if (interval < 1000) {
            interval = 1000;
        }

        async.forEachOf(doc, function (value, key, callback) {
            scraper(value.slug)
                .then(x => {
                    console.log(x);
                    callback();
                })
                .catch(x => { return callback(x) });
        }, function (err) {
            if (err) console.error(err);
            console.log(interval);
            setTimeout(getGroups, interval);
        })
    }).catch(x => console.log(x));
}

setTimeout(getGroups, interval);