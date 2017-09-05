exports.setRequestUrl = function (app, passport) {
    
    
        var controller = require('./controller/controller.js');
    
    
        app.get('/', controller.index);//首頁
    }
    