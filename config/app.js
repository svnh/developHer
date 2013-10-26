var express = require('express');
var path = require('path');


module.exports = function (app) {
  app.configure('development', function () {
    app.use(function staticsPlaceholder(req, res, next) {
        return next();
    });

    app.set('port', process.env.PORT || 9000);
    console.log(path.join(__dirname, '..', '/app'));
    app.set('views', path.join(__dirname, '..', '/app'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    
    });

    app.use(express.static(path.join(__dirname, '..', '/public')));

    app.set('db', 'mongodb://localhost:27017/developHer-dev');
    app.use(express.errorHandler());

}