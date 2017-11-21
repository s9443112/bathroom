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

var i = 0;




var data = fs.readFileSync(path.join(__dirname + '/../crawler/weather_week.json'), 'utf8');
var weather = JSON.parse(data)
//console.log(weather[i].title)
for (i = 0; i < weather.length; i++) {

    news.push(JSON.stringify(weather[i].data+"　"+weather[i].img+"："+weather[i].temperature))

}
//news.push(news[0].title+news[0].temperature)


var client = mqtt.connect('mqtt://140.125.33.105', config);






setInterval(function () {
    i = i + 1;
    console.log(news.length);
    console.log(i);
    if (i > news.length-1){
        console.log("觸發")
        i = 0;
    }
    news[i] = news[i].replace("/", '／')
    news[i] = news[i].replace(/"/g, '')
    news[i] = news[i].replace(/:/g, '：')
    news[i] = news[i].replace(/~/g, '～')

    news[i] = news[i].replace('?', '？')
    news[i] = news[i].replace('!', '！')
    news[i] = news[i].replace(/　/g, '')
    news[i] = news[i].replace(/  /g, '')
    news[i] = news[i].replace(/ /g, '')

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
    
    

}, 9000)





client.on('connect', function () {
    //console.log("連上去了");
    client.subscribe('c876334');
    i = 0;
    //console.log(news[i]);

    news[i] = news[i].replace("/", '／')
    news[i] = news[i].replace(/"/g, '')
    news[i] = news[i].replace(/:/g, '：')
    news[i] = news[i].replace(/~/g, '～')

    news[i] = news[i].replace('?', '？')
    news[i] = news[i].replace('!', '！')
    news[i] = news[i].replace(/　/g, '')
    news[i] = news[i].replace(/  /g, '')
    news[i] = news[i].replace(/ /g, '')

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


