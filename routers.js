exports.setRequestUrl = function (app) {
    
    
        var controller = require('./controller/controller.js');
    
    
        app.get('/', controller.index);//首頁
        app.get('/index_test',controller.index_test);
        app.get('/mqtt_recive',controller.mqtt_recive);
        app.get('/tables',controller.tables);
        app.get('/crawler',controller.crawler);
        app.get('/media',controller.media);
        app.get('/icon',controller.icon);
        app.get('/test',controller.test);
}
        

       