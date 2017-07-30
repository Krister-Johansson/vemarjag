const request = require('request');

module.exports = (doc) => {
    return new Promise((fulfill, reject) => {
        console.log(process.env.DOMAIN_NAME + '/' + doc.slug);
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
                console.log(JSON.parse(body));
                fulfill(JSON.parse(body));
            }
        });
    });
}