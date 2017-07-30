const request = require('request');

module.exports = (doc) => {
    return new Promise((fulfill, reject) => {
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
    });
}