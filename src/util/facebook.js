var request = require('request');
request.post({
    url: 'https://graph.facebook.com',
    form: {
        scrape: true,
        id: 'https://vemarjag.herokuapp.com/demo'
    }
}, function (err, httpResponse, body) {
    console.log(JSON.parse(body));
})