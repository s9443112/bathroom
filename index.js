
var app = require('express')();
var express = require('express');

var http = require('http').Server(app);

var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
//可以使用其他位置的物件
var routers = require('./routers');

app.set('view engine', 'ejs');  
app.use('/static', express.static('static'));

app.set('port', process.env.PORT || 5000);// 設定環境port
app.use(bodyParser.json());  //解析post內容
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
//設置 session 可選參數

routers.setRequestUrl(app); //設定路徑

http.listen(app.get('port'), '0.0.0.0', function () {
    
    console.log("The server started in " + '127.0.0.1:' + app.get('port'));
    console.log('---------------------------------------');
});