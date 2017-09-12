exports.setRequestUrl = function (app) {
    
    
        var controller = require('./controller/controller.js');
    
    
        app.get('/', controller.index);//首頁
        app.get('/index_test',controller.index_test);
        app.get('/tables',controller.tables);
        app.get('/crawler',controller.crawler);
    }
    