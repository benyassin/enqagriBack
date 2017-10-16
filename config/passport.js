var passport = require('passport');
var User = require('../app/models/user');
var config = require('./auth');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
var localOptions = {
    usernameField: 'login'
};

var localLogin = new LocalStrategy(localOptions, function(login, password, done){

    User.findOne({login: login})
    .populate('dpa office region commune province','name id_region id_commune id_province')
    .populate('province')
    .exec(function(err, user){

        if(err){
            return done(err);
        }

        if(!user){
            return done(null,{error : true,message: "Utilisateur " + login + " n'existe pas dans la base du système" } );
        }

        user.comparePassword(password, function(err, isMatch){

            if(err){
                return done(err);
            }

            if(!isMatch){
                return done(null,{error : true,message: "Le mot de passe de l'utilisateur " + login + " est incorrect"});
            }

            return done(null, user);

        });

    });

});


var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.secret
};

var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

    User.findById(payload._id, function(err, user){

        if(err){
            return done(err, false);
        }

        if(user){
            done(null, user);
        } else {
            done(null, false);
        }

    });

});

passport.use(jwtLogin);
passport.use(localLogin);