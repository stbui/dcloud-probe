var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.set('port', 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(app.router);


fs.readdirSync(__dirname + '/controller').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        route = require('./controller/' + file);
        route.controller(app);
    }
});

var srever = http.createServer(app);
srever.listen(app.get('port'), function () {
    console.log('dcloud server listening on port ' + app.get('port'));
});
