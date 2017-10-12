var fs = require('fs');
var readline = require('readline');
var path = require('path');
var time = require('time');




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
			weather_day: weather_day,
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
		console.log(result);
		callback(result);
	});

}

exports.tables = function (req, res) {
	res.render('tables');
}
exports.media = function (req, res) {
	res.render('media');
}
exports.icon = function (req, res) {
	res.render('icon');
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