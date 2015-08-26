var express = require('express');
var app = express();

app.use(express.static('./'));


// Start web server
var server = app.listen(9615, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
