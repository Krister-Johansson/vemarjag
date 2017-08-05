const request = require('request');
const group = require('./group.business');

module.exports = (slug) => {
    return new Promise((fulfill, reject) => {
        request.post({
            url: 'https://graph.facebook.com',
            form: {
                scrape: true,
                id: process.env.DOMAIN_NAME + '/' + slug
            }
        }, function (err, httpResponse, body) {
            if (err) {
                reject(err);
            } else {
                fulfill(JSON.parse(body));
            }
        });
    });
}