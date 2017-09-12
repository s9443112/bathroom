var fs = require('fs');
var readline = require('readline');

exports.index = function (req, res) {
	//res.setHeader('status', 'success');


	var test_data = {
		"name": "Tom",
		"class": "AAA"
	}

	var news = [];


	var fs = require('fs');
	var data = fs.readFileSync(__dirname + '../crawler/get_html.txt', 'utf8');
	data.split(/\r?\n/).forEach(function (line) {
		news.push(line);
	});
	res.render('index', {
		title: '首頁',
		test_data: test_data,
		news: news
	});


	/*
	fs.readFile(__dirname + '/../crawler/get_html.txt', function (err, data) {
		if (err) throw err;

		//console.log(data.toString());
		news = data.toString();
	});*/


}


exports.index_test = function (req, res) {

	var news = [];
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'game54176868',
		database: 'BANG',
	});

	var callback = function (msg) {
		res.render('index_test', {
			title: '首頁',
			news: news,
			msg: msg
		});
	}

	var fs = require('fs');
	var data = fs.readFileSync(__dirname + '/../crawler/news.txt', 'utf8');
	data.split(/\r?\n/).forEach(function (line) {
		news.push(line);
	});

	var sql = "SELECT * from `message`";
	connection.query(sql, function (error, result) {
		if (error) throw error;
		console.log(result);
		callback(result);
	});



}

exports.tables = function (req, res) {
	res.render('tables');

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