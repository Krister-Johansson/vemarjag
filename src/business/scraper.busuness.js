const request = require('request');
const group = require('./group.business');

module.exports = (name) => {
    return new Promise((fulfill, reject) => {
        group.get(name).then((doc) => {
            request.post({
                url: 'https://graph.facebook.com',
                form: {
                    scrape: true,
                    id: process.env.DOMAIN_NAME + '/' + doc.slug
                }
            }, function (err, httpResponse, body) {
                if (err) {
                    reject(err);
                } else {
                    fulfill(JSON.parse(body));
                }
            });
        }).catch((err) => {
            reject(err);
        });
    });
}