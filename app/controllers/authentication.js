var jwt = require('jsonwebtoken');
var User = require('../models/user');
var authConfig = require('../../config/auth');

function generateToken(user){
    return jwt.sign(user, authConfig.secret, {
        expiresIn: 999999999999
    });
}

function setUserInfo(request){

    var user = {
        _id: request._id,
        userId:request.userId,
        login: request.login,
        email: request.email,
        role: request.role,
        nom : request.nom,
        prenom: request.prenom,
        telephone: request.telephone,
        perimetre: {region: request.region,
            province:request.province,
            commune:request.commune,
            dpa:request.dpa,
            office:request.office,},
        affectation: request.affectation,
        communes: request.communes
        };
    return user
}

exports.login = function(req, res){
    if(req.user.error == true){
        return res.status(401).json(req.user)
    }else{
        var userInfo = setUserInfo(req.user);
            res.status(200).json({
                error: false,
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo,
            });
    }
}


exports.loginMobile = function(req, res){
    if(req.user.error == true){
        return res.status(401).json(req.user)
    }else if(req.user.role !== 'agent'){
        return res.status(401).json({error: true,message:"l'accès est limitée au agents de collectes"})
    }
    else{
        var userInfo = setUserInfo(req.user);
        
            res.status(200).json({
                error: false,
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo,
            });
    }
}

exports.register = function(req, res, next){

    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var telephone = req.body.telephone;

    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }

    if(!password){
        return res.status(422).send({error: 'You must enter a password'});
    }

    User.findOne({email: email}, function(err, existingUser){

        if(err){
            return next(err);
        }

        if(existingUser){
            return res.status(422).send({error: 'That email address is already in use'});
        }

        var user = new User({
            email: email,
            password: password,
            role: role,
            telephone : telephone
        });

        user.save(function(err, user){

            if(err){
                return next(err);
            }

            var userInfo = setUserInfo(user);

            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            })

        });

    });

}

exports.roleAuthorization = function(roles){

    return function(req, res, next){

        var user = req.user;

        User.findById(user._id, function(err, foundUser){

            if(err){
                res.status(422).json({error: 'No user found.'});
                return next(err);
            }

            if(roles.indexOf(foundUser.role) > -1){
                return next();
            }

            res.status(401).json({error: 'You are not authorized to view this content'});
            return next('Unauthorized');

        });

    }

}