
var SSL = require("./config/ssl.js");

var options = {
    key: SSL.SSLoptions.key,
    cert: SSL.SSLoptions.cert,
};

var app = require('express')();
var express = require('express');

var https = require('https').Server(options,app);
var io = require('socket.io')(https);

var session = require('express-session');
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

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'recommand 128 bytes random string', //建議使用128個字符的隨機字符串
    cookie: { maxAge: 60 * 1000 }
}));
//設置 session 可選參數
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./config/passport.js')(passport);
routers.setRequestUrl(app,passport); //設定路徑

require('./socket/socket_mqtt.js')(io);

https.listen(app.get('port'), '0.0.0.0', function () {
    
    console.log("The server started in " + '127.0.0.1:' + app.get('port'));
    console.log('---------------------------------------');
});
