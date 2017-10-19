// config/passport.js

// load all the things we need
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// load the auth variables
var configAuth = require('./auth.js');

module.exports = function (passport) {

    // used to serialize the user for the session 序列化
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // used to deserialize the user 反序列化 可儲存至資料庫
    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL

    },
        // facebook will send back the token and profile
        function (request, accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                return done(null, profile);
            });
        }
    ));

    passport.use(new GoogleStrategy({
        clientID: configAuth.GoogleAuth.clientID,
        clientSecret: configAuth.GoogleAuth.clientSecret,
        callbackURL: configAuth.GoogleAuth.callbackURL
    },
        function (request, accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                return done(null, profile);
            });
        }
    ));

};