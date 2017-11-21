var fs = require('fs');
var readline = require('readline');
var path = require('path');
var time = require('time');
var database = require('../config/auth.js');
var iconv = require('iconv-lite');
var chineseConv = require('chinese-conv');


exports.index = function (req, res) {
	//res.setHeader('status', 'success');
	var test_data = {
		"name": "Tom",
		"class": "AAA"
	}

	var news = [];
	var fs = require('fs');
	var data = fs.readFileSync(path.join(__dirname + '/../crawler/news.txt'), 'utf8');
	data.split(/\r?\n/).forEach(function (line) {
		news.push(line);
	});
	res.render('index', {
		title: '首頁',
		test_data: test_data,
		news: news
	});

}

exports.test = function (req, res) {
	
	var min = 0;
	var max = 1;
	var true_on = 0;
	var false_down = 0;
	var many_time = 100;
	var many_team = 100;
	var true_on_many = [];
	var false_down_many = [];
	
	function getRandomArbitrary(min, max) {
		for(i=0;i<100;i++){
			true_on_many[i]=0;
			false_down_many[i]=0;
		}
	
	
		for(i=0;i<100;i++){
	
			while (many_time--) {
				var number = Math.random() * (max - min) + min;
				//console.log(number);
				if (number >= 0.25) {
					true_on = true_on + 1;
					//console.log("true_on++");
				} else {
					false_down = false_down + 1;
					//console.log("false_down++");
				}
				//console.log();
				
			}
			true_on_many[true_on]++;
			false_down_many[false_down]++;
			console.log("true_on[" + true_on + "]is : " + true_on_many[true_on]);
			console.log("false_down[" + false_down + "]is : " + false_down_many[false_down]);
			
			console.log('====');
			true_on = 0;
			false_down = 0;
			many_time = 100;
		}
		console.log('------------');
		for (i = 0; i < 100; i++) {
			//console.log(i);
			console.log("true_on[" + i + "]is : " + true_on_many[i]);
			console.log("false_down[" + i + "]is : " + false_down_many[i]);
	
		}
		res.render('test',{
			true_on_many:true_on_many,
			false_down_many:false_down_many,
		})
	
	}
	
	
	getRandomArbitrary(min, max);
	
	

	
}


exports.index_test = function (req, res) {

	var news = [];
	var weather = '';
	var mysql = require('mysql');
	 
	var connection = mysql.createConnection({
		host: database.MySQL.host,
		user: database.MySQL.user,
		password: database.MySQL.password,
		database: database.MySQL.database,
	});

	var callback = function (msg) {
		res.render('index_test', {
			title: '首頁',
			news: news,
			msg: msg,
			date: now.setTimezone("Asia/Taipei"),
			weather: weather,
			weather_day: weather_day,
			user:req.user,
		});
	}

	var fs = require('fs');
	var data = fs.readFileSync(path.join(__dirname + '/../crawler/news.txt'), 'utf8');
	data.split(/\r?\n/).forEach(function (line) {
		news.push(line);
	});
	var weather = fs.readFileSync(path.join(__dirname + '/../crawler/weather_week.json'), 'utf8');
	console.log(weather);
	weather = JSON.parse(weather);

	var weather_day = fs.readFileSync(path.join(__dirname + '/../crawler/weather_days_information.json'), 'utf8');
	weather_day = JSON.parse(weather_day);

	var now = new time.Date();


	var sql = "SELECT * FROM message";
	connection.query(sql, function (error, result) {
		if (error) throw error;
		//console.log(result);
		callback(result);
	});

}

exports.tables = function (req, res) {
	res.render('tables',{
		user:req.user,
	});
}
exports.media = function (req, res) {
	res.render('media',{
		user:req.user,
	});
}
exports.icon = function (req, res) {
	res.render('icon',{
		user:req.user,
	});
}


exports.start_news_mqtt_recive = function(req,res){
	var forever = require('forever');
	var option = {
		debug:false
	}
	forever.start('./anything/mqtt.js',option);
	res.redirect('/index_test');
}

exports.stop_news_mqtt_recive = function(req,res){
	var forever = require('forever');
	var option = {
		debug:false
	}
	forever.stopAll(1);
	res.redirect('/index_test');
}




exports.mqtt_recive = function (req, res) {

	//console.log(req.query.msg);
	msg = req.query.msg
	console.log(msg)
	var mqtt = require('mqtt');
	var client = mqtt.connect('mqtt://140.125.33.105')

	msg = msg.replace('?', '？')
    msg = msg.replace('!', '！')
    msg = msg.replace(/　/g,'　')
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
    msg = msg.replace(/9/g,'９')

    
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
	console.log("========")
	console.log(str)
	var str_ch = msg;

	var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string
    var buf_ch = iconv.encode(str_ch, 'big5');
	console.log(buf)
	console.log(buf_ch)

	client.on('connect', function () {
		client.subscribe('c876334');
		client.publish('c876334', buf.toString('hex'));
		client.publish('c876335', buf_ch.toString('hex'));
	})
	client.on('message', function (topic, message) {
		console.log(message.toString());
		client.end();
	});

	res.redirect('/index_test');


}

exports.crawler = function (req, res) {
	var callback = function () {
		res.redirect('/index_test');
	}

	var exec = require('exec');

	exec('python3 ./crawler/news.py', function (err, out, code) {
		if (err instanceof Error)
			throw err;
		process.stderr.write(err);
		process.stdout.write(out);
		//process.exit(code);
		callback();
	});

}

exports.crawler_weather = function (req, res) {
	var callback = function () {
		res.redirect('/index_test');
	}

	var exec = require('exec');

	exec('python3 ./crawler/weather.py', function (err, out, code) {
		if (err instanceof Error)
			throw err;
		process.stderr.write(err);
		process.stdout.write(out);
		//process.exit(code);
		callback();
	});
	

}