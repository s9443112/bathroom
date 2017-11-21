exports.setRequestUrl = function (app,passport) {
    
    
        var controller = require('./controller/controller.js');
    
    
        app.get('/', controller.index);//首頁
        app.get('/index_test',controller.index_test);
        app.get('/mqtt_recive',controller.mqtt_recive);
        app.get('/tables',controller.tables);
        app.get('/crawler',controller.crawler);
        app.get('/media',controller.media);
        app.get('/icon',controller.icon);
        app.get('/test',controller.test);
        app.get('/crawler_weather',controller.crawler_weather);

        app.get('/start_news_mqtt_recive',controller.start_news_mqtt_recive);
        app.get('/stop_news_mqtt_recive',controller.stop_news_mqtt_recive);


        app.get('/auth/google/success', function (req, res) {
                console.log(req.user);
                res.send(req.user);
            });
            app.get('/auth/facebook/success', function (req, res) {
                console.log(req.user);
                res.send(req.user);
            });
            app.post('/json', function (req, res) {
                console.log(req.body)
                res.send(req.body);
            });
        
            app.get('/auth/google',
                passport.authenticate('google', {
                    scope:
                    ['https://www.googleapis.com/auth/plus.login',
                        'https://www.googleapis.com/auth/plus.profile.emails.read']
                }
                ));
        
            app.get('/auth/google/callback',
                passport.authenticate('google', {
                    //successRedirect: '/auth/google/success',
                    //failureRedirect: '/auth/google/failure'
                    successRedirect : '/index_test',
                    failureRedirect:'/auth/google/failure'
                })
            );
        
            app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
        
            app.get('/auth/facebook/callback',
                passport.authenticate('facebook', {
                    //successRedirect: '/auth/facebook/success',
                    //failureRedirect: '/auth/facebook/failure'
                    successRedirect : '/index_test',
                    failureRedirect:'/auth/facebook/failure'
        
                })
            );
}
        

       