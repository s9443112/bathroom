exports.setRequestUrl = function (app) {
    
    
        var controller = require('./controller/controller.js');
    
    
        app.get('/', controller.index);//首頁
        app.get('/index_test',controller.index_test);
    }
    