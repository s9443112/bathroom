var request = require("request");
var cheerio = require('cheerio');
var EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
var result = [];

request({
    url: "https://tw.news.yahoo.com/",
    method: "GET"
}, function (error, r, back) { /* Callback 函式 */
    /* e: 錯誤代碼 */
    /* b: 傳回的資料內容 */
    if (error) throw error;
    console.log(back)
    //console.log(back);
    /*
    if (back !== null) {
        myEmitter.emit('get_body', back);
    }
    */
});


myEmitter.on('get_body', function (msg) {
    //console.log(msg);
    var $ = cheerio.load(msg);
    content = $("div.Col2-1-BreakingNews-Proxy");
    $ = cheerio.load(content);
    content = $("ul#H(100%)")
    /*
    for (var i = 0; i < content.length; i++) {
        result.push($(content[i]).text());
    }
    */
    console.log(content.length);
    //console.log(content);
})