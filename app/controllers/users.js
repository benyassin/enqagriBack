let User = require('../models/user');
let mongoose = require('mongoose');
let _ = require('lodash');
let Projet = require('../models/projet');

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
         return res.send(err);
        }
        res.json(user)
    })
};

exports.setAffectation = function(req,res,next){
    let data = req.body.data
    let agents = []

    User.update({'affectation.projet' :req.body.projet,'role':'agent'},{ $pull: {"affectation": {'projet':req.body.projet} } },function(err,results){
        console.log(results)
            data.forEach(commune => {
        if(commune.agents.length > 0){
            commune.id_agents.forEach(agent => {
                if(!agents.includes(agent)){
                    agents.push(agent)
                }
            })
        }
    });
    if(agents.length == 0 ){
        return res.status(200).json('saved')
    }
    newArray = []
    agents.forEach(agent => {
        communes = []
        data.forEach(function(obj){
            if(obj.id_agents.includes(agent)){
                communes.push(obj.id_commune)
            }
        })
        newArray[agent] = communes

    })
    // console.log(newArray)
    Object.keys(newArray).forEach(element =>{
        User.findById(element).exec(function(err,user){
           index = user.affectation.findIndex(x => x.projet==req.body.projet)
           if(index == -1){
             user.affectation.push({'projet':req.body.projet,'communes':newArray[element]})
           }else{
               user.affectation[index].communes = newArray[element]
           }
           user.save()
        })   
    })
    res.status(200).json('saved')
    return req.body
    })

}



exports.deleteUser = function (req, res) {
    let data = req.body
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
    data.plaintext = req.body.password
    if(req.body.role === 'superviseurR' || req.body.role === 'admin' || req.body.role === 'controleur'){
        req.body.province = null
        req.body.office = null
        req.body.dpa = null
    }
    data.perimetre = {
        region : req.body.region,
        province: req.body.province,
        commune: req.body.commune,
        office: req.body.office,
        dpa: req.body.dpa
    };
   let query = {_id : data._id};

    User.findOne(query, function(err,user){
        if(err) return res.status(500).send(err)
            if(!user){
                console.log("user not found creating new one")
                let newUser = new User(data);
                console.log(newUser)
                newUser.save(function(err){
                    if(err) return res.status(500).send(err);
                        console.log("user created with _id = " + newUser._id );
                     res.status(200).send(newUser)
                })
        }else{

            Projet.find({['projet.validation.'+ user.perimetre.region] : user.perimetre.region});
            console.log("user Found !")
            _.merge(user,data)
            user.save( function(err){
                console.log("trying to save " + user)
                if(err) return res.status(500).send({error:'login',message: 'Ce login est déjà utilisé'});
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

exports.getAgentByProvince = function(req,res, next) {
    perimetre = req.user.perimetre;

    query = {
        "perimetre.region": perimetre.region,
        "perimetre.province": perimetre.province,
        "role" : "agent"
    };

    User.find(query, function (err, users) {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json(users)
    })

};

exports.getControllers = function(req,res,next){
    if(req.params.id_region){
        User.find({role:"controleur",'perimetre.region':req.params.id_region},'nom prenom',function(err,controllers){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(controllers)
        })
    }else{
    User.find({role:"controleur"},'nom prenom',function(err,controllers){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(controllers)
    })
    }
}