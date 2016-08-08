const Feedly = require('feedly');

var f = new Feedly({
    client_id: 'sandbox',
    client_secret: '1QA6I3662OW2KEG48WA6',
    base: 'http://sandbox.feedly.com',
    port: 8080
});

f.entry(0).then(function(results) {
    // process results
    console.log(results);
},
function (error) {
    // process error
});
