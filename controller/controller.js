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
	var data = fs.readFileSync(__dirname + '/../crawler/get_html.txt', 'utf8');
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

	res.render('index_test', {
		title: '測試網頁'
	})
}