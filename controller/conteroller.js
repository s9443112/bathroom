
exports.index = function (req, res) {
	res.setHeader('status', 'success');
	var config_first_page = modules.result_all;
	var send_package = {
		//"memdata": config_mem_data,  //得到mem_id
		"index": config_first_page  //得到產品商家機台資訊
	};
	//console.log("123"+req);
	res.send(send_package);
}