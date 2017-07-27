var request = require('request');
var group = require('../business/group.business');

module.exports = {
    scrape: () => {
        return new Promise((fulfill, reject) => {
            group.list().then((doc) => {
                    doc.forEach((x) => {
                        console.log(x);
                        // request.post({
                        //     url: 'https://graph.facebook.com',
                        //     form: {
                        //         scrape: true,
                        //         id: url
                        //     }
                        // }, function (err, httpResponse, body) {
                        //     if (err) {
                        //         reject(err);
                        //     } else {
                        //         fulfill(JSON.parse(body));
                        //     }
                        // })
                    });
                     fulfill(doc);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}