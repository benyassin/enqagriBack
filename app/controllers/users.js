var User = require('../models/user');
var mongoose = require('mongoose');
var _ = require('lodash');


exports.getUsers = function(req, res,next ) {
   User.find()
   .select('-password')
   .exec(function (err, users){
       if(err){
        return  res.send(err);
       }
       res.json(users)
   })
}

exports.getUser = function (req, res, next) {
    User.findOne({_id : req.params.user_id}, function (err, user){
        if(err){
         return res.sen(err);
        }
        res.json(user)
    })
};

exports.deleteUser = function (req, res) {

    User.remove({_id :req.params.user_id}, function (err, user) {
            res.json(user)
        });

};

// exports.createUser = function (req, res,next) {
//         var nom = req.body.nom;
//         var prenom = req.body.prenom;
//         var email = req.body.email;
//         var password = req.body.password;
//         var role = req.body.role;
//         var telephone = req.body.telephone;
//         var createdBy = req.user._id;
//         var perimetre = {region : req.body.region,province: req.body.province,commune: req.body.commune}
//
//     if(!email){
//         return res.status(422).send({error: 'You must enter an email address'});
//     }
//
//     if(!password){
//         return res.status(422).send({error: 'You must enter a password'});
//     }
//     User.findOne({email: email}, function(err, existingUser) {
//         if(err){
//             return next(err);
//         }
//
//         if(existingUser){
//             return res.status(422).send({error: 'That email address is already in use'});
//         }
//
//         var user = new User({
//             nom: nom,
//             prenom: prenom,
//             email: email,
//             password: password,
//             role: role,
//             telephone: telephone,
//             createdBy: createdBy,
//             perimetre : perimetre
//         });
//         user.save(function(err, user){
//
//             if(err){
//                 return next(err);
//             }
//
//             res.status(201).json({
//                 user: user
//             })
//
//         });
// });
// }

exports.createUser = function(req, res ,next){
    data = req.body;
    data.id_createur = req.user._id;
    data.perimetre = {region : req.body.region,province: req.body.province,commune: req.body.commune};
    query = {_id : data._id};

    User.findOne(query, function(err,user){
        if(err) return res.status(500).send(err)
            if(!user){
                console.log("user not found creating new one")
                var newUser = new User(data);
                newUser.save(function(err){
                    if(err) return res.status(500).send(err)
                        console.log("user created with _id = " + newUser._id );
                     res.status(200).send(newUser)
                })
        }else{
            console.log("user Found !")
            _.merge(user,data)
            user.save( function(err){
                console.log("trying to save " + user)
                if(err) return res.status(500).send(err)
                    return res.status(200).send(user)
                })
            }
    })


};

exports.updateUser = function (req, res) {
        data = req.body
        User.findOneAndUpdate({_id : req.params.user_id},data,{new:true,upsert:true},function(err, user){
            if(err) {
                res.send(err)
            }
        return res.send(user);
        })
    };