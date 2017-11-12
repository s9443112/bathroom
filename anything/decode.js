var iconv = require('iconv-lite');
var chineseConv = require('chinese-conv');
var mqtt = require('mqtt');

var config = {
    port: 1883,
    clientId: 'nodejs'
};

var client = mqtt.connect('mqtt://140.125.33.105', config);

var str = "家門上的畫達49億　竟是博物館之寶";
//console.log(str);
var new_str = chineseConv.sify(str);
console.log(new_str);
var buf = iconv.encode(new_str, 'GBK');//return GBK encoded bytes from unicode string


client.publish('c876333', buf.toString('hex'));





client.on('message', function (topic, message) {
    // message is Buffer 

    console.log(message);
    //console.log(message.toString());
    console.log('-----------------');
    //x= JSON.parse(message.toString());
    //console.log(x.topic);




});