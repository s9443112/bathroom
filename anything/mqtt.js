var mqtt = require('mqtt');
var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var chineseConv = require('chinese-conv');



var config = {
    port: 1883,
    clientId: 'nodejs_mqtt',
    will:{
        topic:'c876330',
        payload:'I am die',
        qos:0
    }
};
var news = [];

var i = 0;
var data = fs.readFileSync(path.join(__dirname + '/../crawler/news.txt'), 'utf8');
data.split(/\r?\n/).forEach(function (line) {
    news.push(line);
});

var client = mqtt.connect('mqtt://140.125.33.105', config);

function fix(){
    news[i] = news[i].replace('0', '０')
    news[i] = news[i].replace('1', '１')
    news[i] = news[i].replace('2', '２')
    news[i] = news[i].replace('3', '３')
    news[i] = news[i].replace('4', '４')
    news[i] = news[i].replace('5', '５')
    news[i] = news[i].replace('6', '６')
    news[i] = news[i].replace('7', '７')
    news[i] = news[i].replace('8', '８')
    news[i] = news[i].replace('9', '９')

    
    news[i] = news[i].replace('A', 'Ａ')
    news[i] = news[i].replace('B', 'Ｂ')
    news[i] = news[i].replace('C', 'Ｃ')
    news[i] = news[i].replace('D', 'Ｄ')
    news[i] = news[i].replace('E', 'Ｅ')
    news[i] = news[i].replace('F', 'Ｆ')
    news[i] = news[i].replace('G', 'Ｇ')
    news[i] = news[i].replace('H', 'Ｈ')
    news[i] = news[i].replace('I', 'Ｉ')
    news[i] = news[i].replace('J', 'Ｊ')
    news[i] = news[i].replace('K', 'Ｋ')
    news[i] = news[i].replace('L', 'Ｌ')
    news[i] = news[i].replace('M', 'Ｍ')
    news[i] = news[i].replace('N', 'Ｎ')
    news[i] = news[i].replace('O', 'Ｏ')
    news[i] = news[i].replace('P', 'Ｐ')
    news[i] = news[i].replace('Q', 'Ｑ')
    news[i] = news[i].replace('R', 'Ｒ')
    news[i] = news[i].replace('S', 'Ｓ')
    news[i] = news[i].replace('T', 'Ｔ')
    news[i] = news[i].replace('U', 'Ｕ')
    news[i] = news[i].replace('V', 'Ｖ')
    news[i] = news[i].replace('W', 'Ｗ')
    news[i] = news[i].replace('X', 'Ｘ')
    news[i] = news[i].replace('Y', 'Ｙ')
    news[i] = news[i].replace('Z', 'Ｚ')


    news[i] = news[i].replace('a', 'ａ')
    news[i] = news[i].replace('b', 'ｂ')
    news[i] = news[i].replace('c', 'ｃ')
    news[i] = news[i].replace('d', 'ｄ')
    news[i] = news[i].replace('e', 'ｅ')
    news[i] = news[i].replace('f', 'ｆ')
    news[i] = news[i].replace('g', 'ｇ')
    news[i] = news[i].replace('h', 'ｈ')
    news[i] = news[i].replace('i', 'ｉ')
    news[i] = news[i].replace('j', 'ｊ')
    news[i] = news[i].replace('k', 'ｋ')
    news[i] = news[i].replace('l', 'ｌ')
    news[i] = news[i].replace('m', 'ｍ')
    news[i] = news[i].replace('n', 'ｎ')
    news[i] = news[i].replace('o', 'ｏ')
    news[i] = news[i].replace('p', 'ｐ')
    news[i] = news[i].replace('q', 'ｑ')
    news[i] = news[i].replace('r', 'ｒ')
    news[i] = news[i].replace('s', 'ｓ')
    news[i] = news[i].replace('t', 'ｔ')
    news[i] = news[i].replace('u', 'ｕ')
    news[i] = news[i].replace('v', 'ｖ')
    news[i] = news[i].replace('w', 'ｗ')
    news[i] = news[i].replace('x', 'ｘ')
    news[i] = news[i].replace('y', 'ｙ')
    news[i] = news[i].replace('z', 'ｚ')


    news[i] = news[i].replace('「', '（')
    news[i] = news[i].replace('」', '）')
}


setInterval(function () {
    i = i + 1;
    console.log(news.length);
    console.log(i);
    if (i > news.length-2){
        console.log("觸發")
        i = 0;
    }
    
    news[i] = news[i].replace(/"/g, '＂')
    news[i] = news[i].replace(/:/g, '：')
    news[i] = news[i].replace(/~/g, '～')

    news[i] = news[i].replace('?', '？')
    news[i] = news[i].replace('!', '！')
    news[i] = news[i].replace(/　/g, '　')
    news[i] = news[i].replace(/  /g, '　')
    news[i] = news[i].replace(/ /g, '　')

    news[i] = news[i].replace(/0/g, '０')
    news[i] = news[i].replace(/1/g, '１')
    news[i] = news[i].replace(/2/g, '２')
    news[i] = news[i].replace(/3/g, '３')
    news[i] = news[i].replace(/4/g, '４')
    news[i] = news[i].replace(/5/g, '５')
    news[i] = news[i].replace(/6/g, '６')
    news[i] = news[i].replace(/7/g, '７')
    news[i] = news[i].replace(/8/g, '８')
    news[i] = news[i].replace(/9/g, '９')


    news[i] = news[i].replace(/A/g, 'Ａ')
    news[i] = news[i].replace(/B/g, 'Ｂ')
    news[i] = news[i].replace(/C/g, 'Ｃ')
    news[i] = news[i].replace(/D/g, 'Ｄ')
    news[i] = news[i].replace(/E/g, 'Ｅ')
    news[i] = news[i].replace(/F/g, 'Ｆ')
    news[i] = news[i].replace(/G/g, 'Ｇ')
    news[i] = news[i].replace(/H/g, 'Ｈ')
    news[i] = news[i].replace(/I/g, 'Ｉ')
    news[i] = news[i].replace(/J/g, 'Ｊ')
    news[i] = news[i].replace(/K/g, 'Ｋ')
    news[i] = news[i].replace(/L/g, 'Ｌ')
    news[i] = news[i].replace(/M/g, 'Ｍ')
    news[i] = news[i].replace(/N/g, 'Ｎ')
    news[i] = news[i].replace(/O/g, 'Ｏ')
    news[i] = news[i].replace(/P/g, 'Ｐ')
    news[i] = news[i].replace(/Q/g, 'Ｑ')
    news[i] = news[i].replace(/R/g, 'Ｒ')
    news[i] = news[i].replace(/S/g, 'Ｓ')
    news[i] = news[i].replace(/T/g, 'Ｔ')
    news[i] = news[i].replace(/U/g, 'Ｕ')
    news[i] = news[i].replace(/V/g, 'Ｖ')
    news[i] = news[i].replace(/W/g, 'Ｗ')
    news[i] = news[i].replace(/X/g, 'Ｘ')
    news[i] = news[i].replace(/Y/g, 'Ｙ')
    news[i] = news[i].replace(/Z/g, 'Ｚ')


    news[i] = news[i].replace(/a/g, 'ａ')
    news[i] = news[i].replace(/b/g, 'ｂ')
    news[i] = news[i].replace(/c/g, 'ｃ')
    news[i] = news[i].replace(/d/g, 'ｄ')
    news[i] = news[i].replace(/e/g, 'ｅ')
    news[i] = news[i].replace(/f/g, 'ｆ')
    news[i] = news[i].replace(/g/g, 'ｇ')
    news[i] = news[i].replace(/h/g, 'ｈ')
    news[i] = news[i].replace(/i/g, 'ｉ')
    news[i] = news[i].replace(/j/g, 'ｊ')
    news[i] = news[i].replace(/k/g, 'ｋ')
    news[i] = news[i].replace(/l/g, 'ｌ')
    news[i] = news[i].replace(/m/g, 'ｍ')
    news[i] = news[i].replace(/n/g, 'ｎ')
    news[i] = news[i].replace(/o/g, 'ｏ')
    news[i] = news[i].replace(/p/g, 'ｐ')
    news[i] = news[i].replace(/q/g, 'ｑ')
    news[i] = news[i].replace(/r/g, 'ｒ')
    news[i] = news[i].replace(/s/g, 'ｓ')
    news[i] = news[i].replace(/t/g, 'ｔ')
    news[i] = news[i].replace(/u/g, 'ｕ')
    news[i] = news[i].replace(/v/g, 'ｖ')
    news[i] = news[i].replace(/w/g, 'ｗ')
    news[i] = news[i].replace(/x/g, 'ｘ')
    news[i] = news[i].replace(/y/g, 'ｙ')
    news[i] = news[i].replace(/z/g, 'ｚ')


    news[i] = news[i].replace('「', '（')
    news[i] = news[i].replace('」', '）')
    var str = chineseConv.sify(news[i]);
    var str_ch = news[i];

    //var str = news[i];
    console.log(str);
    var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
    console.log(buf);
    var buf_ch = iconv.encode(str_ch, 'big5');

    
    client.publish('c876334', buf.toString('hex'));
    client.publish('c876335', buf_ch.toString('hex'));

    
}, 5000)





client.on('connect', function () {
    console.log("連上去了");
    client.subscribe('c876335');
    news[i] = news[i].replace(/"/g, '＂')
    news[i] = news[i].replace(/:/g, '：')
    news[i] = news[i].replace(/~/g, '～')

    news[i] = news[i].replace('?', '？')
    news[i] = news[i].replace('!', '！')
    news[i] = news[i].replace(/　/g, '　')
    news[i] = news[i].replace(/  /g, '　')
    news[i] = news[i].replace(/ /g, '　')

    news[i] = news[i].replace(/0/g, '０')
    news[i] = news[i].replace(/1/g, '１')
    news[i] = news[i].replace(/2/g, '２')
    news[i] = news[i].replace(/3/g, '３')
    news[i] = news[i].replace(/4/g, '４')
    news[i] = news[i].replace(/5/g, '５')
    news[i] = news[i].replace(/6/g, '６')
    news[i] = news[i].replace(/7/g, '７')
    news[i] = news[i].replace(/8/g, '８')
    news[i] = news[i].replace(/9/g, '９')


    news[i] = news[i].replace(/A/g, 'Ａ')
    news[i] = news[i].replace(/B/g, 'Ｂ')
    news[i] = news[i].replace(/C/g, 'Ｃ')
    news[i] = news[i].replace(/D/g, 'Ｄ')
    news[i] = news[i].replace(/E/g, 'Ｅ')
    news[i] = news[i].replace(/F/g, 'Ｆ')
    news[i] = news[i].replace(/G/g, 'Ｇ')
    news[i] = news[i].replace(/H/g, 'Ｈ')
    news[i] = news[i].replace(/I/g, 'Ｉ')
    news[i] = news[i].replace(/J/g, 'Ｊ')
    news[i] = news[i].replace(/K/g, 'Ｋ')
    news[i] = news[i].replace(/L/g, 'Ｌ')
    news[i] = news[i].replace(/M/g, 'Ｍ')
    news[i] = news[i].replace(/N/g, 'Ｎ')
    news[i] = news[i].replace(/O/g, 'Ｏ')
    news[i] = news[i].replace(/P/g, 'Ｐ')
    news[i] = news[i].replace(/Q/g, 'Ｑ')
    news[i] = news[i].replace(/R/g, 'Ｒ')
    news[i] = news[i].replace(/S/g, 'Ｓ')
    news[i] = news[i].replace(/T/g, 'Ｔ')
    news[i] = news[i].replace(/U/g, 'Ｕ')
    news[i] = news[i].replace(/V/g, 'Ｖ')
    news[i] = news[i].replace(/W/g, 'Ｗ')
    news[i] = news[i].replace(/X/g, 'Ｘ')
    news[i] = news[i].replace(/Y/g, 'Ｙ')
    news[i] = news[i].replace(/Z/g, 'Ｚ')


    news[i] = news[i].replace(/a/g, 'ａ')
    news[i] = news[i].replace(/b/g, 'ｂ')
    news[i] = news[i].replace(/c/g, 'ｃ')
    news[i] = news[i].replace(/d/g, 'ｄ')
    news[i] = news[i].replace(/e/g, 'ｅ')
    news[i] = news[i].replace(/f/g, 'ｆ')
    news[i] = news[i].replace(/g/g, 'ｇ')
    news[i] = news[i].replace(/h/g, 'ｈ')
    news[i] = news[i].replace(/i/g, 'ｉ')
    news[i] = news[i].replace(/j/g, 'ｊ')
    news[i] = news[i].replace(/k/g, 'ｋ')
    news[i] = news[i].replace(/l/g, 'ｌ')
    news[i] = news[i].replace(/m/g, 'ｍ')
    news[i] = news[i].replace(/n/g, 'ｎ')
    news[i] = news[i].replace(/o/g, 'ｏ')
    news[i] = news[i].replace(/p/g, 'ｐ')
    news[i] = news[i].replace(/q/g, 'ｑ')
    news[i] = news[i].replace(/r/g, 'ｒ')
    news[i] = news[i].replace(/s/g, 'ｓ')
    news[i] = news[i].replace(/t/g, 'ｔ')
    news[i] = news[i].replace(/u/g, 'ｕ')
    news[i] = news[i].replace(/v/g, 'ｖ')
    news[i] = news[i].replace(/w/g, 'ｗ')
    news[i] = news[i].replace(/x/g, 'ｘ')
    news[i] = news[i].replace(/y/g, 'ｙ')
    news[i] = news[i].replace(/z/g, 'ｚ')


    news[i] = news[i].replace('「', '（')
    news[i] = news[i].replace('」', '）')

    var str = chineseConv.sify(news[i]);
    var str_ch = news[i];

    //var str = news[i];
    console.log(str);
    var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
    console.log(buf);
    var buf_ch = iconv.encode(str_ch, 'big5');

    
    client.publish('c876334', buf.toString('hex'));
    client.publish('c876335', buf_ch.toString('hex'));
});

client.on('message', function (topic, message) {
    // message is Buffer 

    console.log(message.toString());
    //console.log(message.toString());
    console.log('-----------------');
    //x= JSON.parse(message.toString());
    //console.log(x.topic);




});

