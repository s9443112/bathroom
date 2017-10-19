
var SSL = require("./config/ssl.js");

var options = {
    key: SSL.SSLoptions.key,
    cert: SSL.SSLoptions.cert,
};

var app = require('express')();
var express = require('express');

var https = require('https').Server(app);

var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
//可以使用其他位置的物件
var routers = require('./routers');
var passport = require('passport');

app.set('view engine', 'ejs');  
app.use('/static', express.static('static'));

app.set('port', process.env.PORT || 8080);// 設定環境port
app.use(bodyParser.json());  //解析post內容
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
//設置 session 可選參數

require('./config/passport.js')(passport);
routers.setRequestUrl(app,passport); //設定路徑

https.listen(app.get('port'), '0.0.0.0', function () {
    
    console.log("The server started in " + '127.0.0.1:' + app.get('port'));
    console.log('---------------------------------------');
});