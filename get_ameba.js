var mqtt = require('mqtt');
var iconv = require('iconv-lite');
var chineseConv = require('chinese-conv');

var client = mqtt.connect('mqtt://140.125.33.105');

var database = require('./config/auth.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: database.MySQL.host,
    user: database.MySQL.user,
    password: database.MySQL.password,
    database: database.MySQL.database,
});
const mqtt_topic_error = 'c876330'
const mqtt_topic_cn = 'c876334' //檢體
const mqtt_topic_ch = 'c876335' //繁體

var ES001_1 = 'ES001-1';
var ES001_2 = 'ES001-2';
var ES001_3 = 'ES001-3';

client.on('connect', function () {
    for (i = 0; i < 5; i++) {
        client.subscribe(mqtt_topic_error);
        client.subscribe(mqtt_topic_cn);
        client.subscribe(mqtt_topic_ch);
        //client.publish(mqtt_topic, 'W')
    }
});
client.on('message', function (topic, message) {

    console.log(topic + " : " + message.toString());
    //console.log(typeof(JSON.parse(message.toString())))

    try {
        if (typeof (JSON.parse(message.toString())) == 'object') {
            console.log("object")
            try {
                x = JSON.parse(message.toString())
            } catch (error) {
                alert(error);
                console.log("不是字串")
            }

            if (x.topic == ES001_1) {
                console.log("計數：" + x.count)

                var sql = "SELECT `count` FROM `eb` A WHERE A.name = '" + ES001_1 + "'";
                connection.query(sql, function (error, result) {
                    if (error) throw error;
                    console.log(result[0]);
                    var now_point = x.count + result[0];

                    //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
                    var sql = "UPDATE `eb` A SET `count` = '" + 1 + "' WHERE A.name= 'ES001-1'";
                    connection.query(sql, function (error, result) {
                        if (error) throw error;
                        console.log(result);
                    });

                });
            }
            if (x.topic == ES001_2) {
                console.log("計數：" + x.count)

                var sql = "SELECT `count` FROM `eb` A WHERE A.name = '" + ES001_2 + "'";
                connection.query(sql, function (error, result) {
                    if (error) throw error;
                    console.log(result[0]);
                    var now_point = x.count + result[0];

                    //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
                    var sql = "UPDATE `eb` A SET `count` = '" + 1 + "' WHERE A.name= 'ES001-2'";
                    connection.query(sql, function (error, result) {
                        if (error) throw error;
                        console.log(result);
                    });

                });
            }
            if (x.topic == ES001_3) {
                console.log("計數：" + x.count)

                var sql = "SELECT `count` FROM `eb` A WHERE A.name = '" + ES001_3 + "'";
                connection.query(sql, function (error, result) {
                    if (error) throw error;
                    console.log(result[0]);
                    var now_point = x.count + result[0];

                    //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
                    var sql = "UPDATE `eb` A SET `count` = '" + 1 + "' WHERE A.name= 'ES001-3'";
                    connection.query(sql, function (error, result) {
                        if (error) throw error;
                        console.log(result);
                    });

                });
            }
        }

    } catch (error) {
        console.log("不是字串")
    }

    if (topic == mqtt_topic_error) {
        msg = "訊息停止發送"
        msg = msg.replace(/"/g, '＂')
        msg = msg.replace(/:/g, '：')
        msg = msg.replace(/~/g, '～')
    
        msg = msg.replace('?', '？')
        msg = msg.replace('!', '！')
        msg = msg.replace(/　/g, '　')
        msg = msg.replace(/  /g, '　')
        msg = msg.replace(/ /g, '　')
    
        msg = msg.replace(/0/g, '０')
        msg = msg.replace(/1/g, '１')
        msg = msg.replace(/2/g, '２')
        msg = msg.replace(/3/g, '３')
        msg = msg.replace(/4/g, '４')
        msg = msg.replace(/5/g, '５')
        msg = msg.replace(/6/g, '６')
        msg = msg.replace(/7/g, '７')
        msg = msg.replace(/8/g, '８')
        msg = msg.replace(/9/g, '９')
    
    
        msg = msg.replace(/A/g, 'Ａ')
        msg = msg.replace(/B/g, 'Ｂ')
        msg = msg.replace(/C/g, 'Ｃ')
        msg = msg.replace(/D/g, 'Ｄ')
        msg = msg.replace(/E/g, 'Ｅ')
        msg = msg.replace(/F/g, 'Ｆ')
        msg = msg.replace(/G/g, 'Ｇ')
        msg = msg.replace(/H/g, 'Ｈ')
        msg = msg.replace(/I/g, 'Ｉ')
        msg = msg.replace(/J/g, 'Ｊ')
        msg = msg.replace(/K/g, 'Ｋ')
        msg = msg.replace(/L/g, 'Ｌ')
        msg = msg.replace(/M/g, 'Ｍ')
        msg = msg.replace(/N/g, 'Ｎ')
        msg = msg.replace(/O/g, 'Ｏ')
        msg = msg.replace(/P/g, 'Ｐ')
        msg = msg.replace(/Q/g, 'Ｑ')
        msg = msg.replace(/R/g, 'Ｒ')
        msg = msg.replace(/S/g, 'Ｓ')
        msg = msg.replace(/T/g, 'Ｔ')
        msg = msg.replace(/U/g, 'Ｕ')
        msg = msg.replace(/V/g, 'Ｖ')
        msg = msg.replace(/W/g, 'Ｗ')
        msg = msg.replace(/X/g, 'Ｘ')
        msg = msg.replace(/Y/g, 'Ｙ')
        msg = msg.replace(/Z/g, 'Ｚ')
    
    
        msg = msg.replace(/a/g, 'ａ')
        msg = msg.replace(/b/g, 'ｂ')
        msg = msg.replace(/c/g, 'ｃ')
        msg = msg.replace(/d/g, 'ｄ')
        msg = msg.replace(/e/g, 'ｅ')
        msg = msg.replace(/f/g, 'ｆ')
        msg = msg.replace(/g/g, 'ｇ')
        msg = msg.replace(/h/g, 'ｈ')
        msg = msg.replace(/i/g, 'ｉ')
        msg = msg.replace(/j/g, 'ｊ')
        msg = msg.replace(/k/g, 'ｋ')
        msg = msg.replace(/l/g, 'ｌ')
        msg = msg.replace(/m/g, 'ｍ')
        msg = msg.replace(/n/g, 'ｎ')
        msg = msg.replace(/o/g, 'ｏ')
        msg = msg.replace(/p/g, 'ｐ')
        msg = msg.replace(/q/g, 'ｑ')
        msg = msg.replace(/r/g, 'ｒ')
        msg = msg.replace(/s/g, 'ｓ')
        msg = msg.replace(/t/g, 'ｔ')
        msg = msg.replace(/u/g, 'ｕ')
        msg = msg.replace(/v/g, 'ｖ')
        msg = msg.replace(/w/g, 'ｗ')
        msg = msg.replace(/x/g, 'ｘ')
        msg = msg.replace(/y/g, 'ｙ')
        msg = msg.replace(/z/g, 'ｚ')
    
    
        msg = msg.replace('「', '（')
        msg = msg.replace('」', '）')
        var str = chineseConv.sify(msg);
        var str_ch = msg;

        //var str = news[i];
        console.log(str);
        var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
        console.log(buf);
        var buf_ch = iconv.encode(str_ch, 'big5');


        client.publish('c876334', buf.toString('hex'));
        client.publish('c876335', buf_ch.toString('hex'));

    }

    if (message.toString() == ES001_1) {
        console.log('ES001-1 開機了');

        var sql = "SELECT `online_count` FROM `now_eb` A WHERE A.id = '1'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log("開機數量："+result[0].online_count);
            var now_point = result[0].online_count+1;

            //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
            var sql = "UPDATE `now_eb` A SET `online_count` = '" + now_point + "'";
            connection.query(sql, function (error, result) {
                if (error) throw error;
                console.log(result);
            });

        });

        var sql = "UPDATE `eb` A SET `free_bang` = '" + 1 + "' WHERE A.name= 'ES001-1'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log(result);
        });
    }
    if (message.toString() == ES001_2) {
        console.log('ES001-2 開機了');

        var sql = "SELECT `online_count` FROM `now_eb` A WHERE A.id = '1'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log("開機數量："+result[0].online_count);
            var now_point = result[0].online_count+1;

            //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
            var sql = "UPDATE `now_eb` A SET `online_count` = '" + now_point + "'";
            connection.query(sql, function (error, result) {
                if (error) throw error;
                console.log(result);
            });

        });

        var sql = "UPDATE `eb` A SET `free_bang` = '" + 1 + "' WHERE A.name= 'ES001-2'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log(result);
        });
    }
    if (message.toString() == ES001_3) {
        console.log('ES001-3 開機了');

        var sql = "SELECT `online_count` FROM `now_eb` A WHERE A.id = '1'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log("開機數量："+result[0].online_count);
            var now_point = result[0].online_count+1;

            //var sql = "INSERT INTO `smart_user` A (point) VALUE('" + now_point + "') WHERE A.user_id= '" + id + "'";
            var sql = "UPDATE `now_eb` A SET `online_count` = '" + now_point + "'";
            connection.query(sql, function (error, result) {
                if (error) throw error;
                console.log(result);
            });

        });

        var sql = "UPDATE `eb` A SET `free_bang` = '" + 1 + "' WHERE A.name= 'ES001-3'";
        connection.query(sql, function (error, result) {
            if (error) throw error;
            console.log(result);
        });
    }



});