var request = require("request");
var cheerio = require('cheerio');
var EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
var result = [];

request({
    url: "https://tw.news.yahoo.com", /*Yunlin weather */
    method: "GET"
}, function (error, r, back) { /* Callback 函式 */
    /* e: 錯誤代碼 */
    /* b: 傳回的資料內容 */
    if (error) throw error;

    //console.log(back);


    var $ = cheerio.load(msg);
    content = $("#mrt-node-Col2-1-BreakingNews ");

    /*
    for (var i = 0; i < content.length; i++) {
        result.push($(content[i]).text());
    }
    */
    console.log(content);


    var fs = require('fs');
    /*
    fs.writeFile('test.txt', back, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });*/


    /*
    if (back !== null) {
        myEmitter.emit('get_body', back);
    }*/

});


myEmitter.on('get_body', function (msg) {
    //console.log(msg);
    var $ = cheerio.load(msg);
    content = $("div#mrt-node-Col2-1-BreakingNews");

    /*
    for (var i = 0; i < content.length; i++) {
        result.push($(content[i]).text());
    }
    */
    //console.log(content);
    console.log(content);
    console.log("=================================");
})