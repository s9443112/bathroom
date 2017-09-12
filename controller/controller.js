
exports.index = function (req, res) {
	//res.setHeader('status', 'success');
	res.render('index',{
		title:'首頁'
	});
}
exports.index_test = function(req,res){
	res.render('index_test',{
		title:'測試網頁'
	})
}