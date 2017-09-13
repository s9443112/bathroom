var getJSON = require('get-json');
var timer; //設定時間
var cityname = []; //存放城市陣列
_getJSON();

function _getJSON() {
//clearTimeout(timer);
    getJSON('https://works.ioa.tw/weather/api/all.json', function (error, response) {
      get_response = response;
      response.forEach(function (e, value) {
        cityname[value] = [];
        cityname[value][0] = e.name;
        console.log(e.towns)
      });
    });
//    timer = setInterval(_getJSON, 1800000);  //30分鐘更新一次
  }