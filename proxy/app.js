const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const proxy = require('express-http-proxy');
const app = express();
const cors = require('cors');

// Config
const domainToRedirect = "www.freeforexapi.com";
const proxyByHttps = true;
const headersSettings = function (proxyReqOpts, srcReq) {
    return proxyReqOpts;
};

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', proxy(domainToRedirect, {
    https: proxyByHttps,
    proxyReqBodyDecorator: function(bodyContent, srcReq) {
        console.log(bodyContent);
        return bodyContent;
    },
    proxyReqOptDecorator: headersSettings
}));

module.exports = app;
