var fs = require('fs');
var readline = require('readline');
var path = require('path');
var time = require('time');
var json = require('jsonfile')



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


exports.index_test = function (req, res) {

	var news = [];
	var weather = '';
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: '139.162.72.78',
		user: 's9443112',
		password: 'game54176868',
		database: 'BANG',
	});

	var callback = function (msg) {
		res.render('index_test', {
			title: '首頁',
			news: news,
			msg: msg,
			date: now.setTimezone("Asia/Taipei"),
			weather: weather,
		});
	}

	var fs = require('fs');
	var data = fs.readFileSync(path.join(__dirname + '/../crawler/news.txt'), 'utf8');
	data.split(/\r?\n/).forEach(function (line) {
		news.push(line);
	});
	var weather = fs.readFileSync(path.join(__dirname + '/../crawler/weather_week.json'), 'utf8');
	console.log(weather);

	var now = new time.Date();


	var sql = "SELECT * FROM message";
	connection.query(sql, function (error, result) {
		if (error) throw error;
		console.log(result);
		callback(result);
	});

}

exports.tables = function (req, res) {
	res.render('tables');
}

exports.mqtt_recive = function (req, res) {

	//console.log(req.query.msg);
	msg = req.query.msg
	var mqtt = require('mqtt');
	var client = mqtt.connect('mqtt://140.125.33.105')

	client.on('connect', function () {
		client.subscribe('C8764');
		client.publish('C8764', msg);
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