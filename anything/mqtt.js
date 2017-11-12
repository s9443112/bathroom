var mqtt = require('mqtt');
var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var chineseConv = require('chinese-conv');



var config = {
    port: 1883,
    clientId: 'nodejs'
};
var news = [];

var i = 1;
var data = fs.readFileSync(path.join(__dirname + '/../crawler/news.txt'), 'utf8');
data.split(/\r?\n/).forEach(function (line) {
    news.push(line);
});

var client = mqtt.connect('mqtt://140.125.33.105', config);


setInterval(function () {
    var str = chineseConv.sify(news[i]);
    console.log(str);
    var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
    console.log(buf);

    client.publish('c876333', buf.toString('hex'));
    if (i > news.length-3) {
        i = 0;
    }
    i = i + 1;
}, 15000)





client.on('connect', function () {
    console.log("連上去了");
    client.subscribe('c876333');
    var str = chineseConv.sify(news[0]);
    console.log(str);
    var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
    console.log(buf);
    console.log('-------------------');
    console.log(buf.toString('hex'));
    client.publish('c876333', buf.toString('hex'));
});

client.on('message', function (topic, message) {
    // message is Buffer 

    console.log(message);
    //console.log(message.toString());
    console.log('-----------------');
    //x= JSON.parse(message.toString());
    //console.log(x.topic);




});

