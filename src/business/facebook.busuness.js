var request = require('request');
var group = require('../business/group.business');

const scrape = () => {
    group.list().then((doc) => {
        doc.forEach((x) => {
            let url = process.env.DOMAIN_NAME + '/' + x.slug;
            request.post({
                url: 'https://graph.facebook.com',
                form: {
                    scrape: true,
                    id: url
                }
            }, function (err, httpResponse, body) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.parse(body));
                }
            })
        });
    }).catch((err) => {
        console.log(err);
    });
}

function fb(interval) {
    this.timer = null;
    this.interval = interval;
}

fb.prototype.start = function () {
    this.timer = setInterval(scrape, this.interval);
}

fb.prototype.stop = function () {
    clearInterval(this.timer);
}

module.exports = fb;