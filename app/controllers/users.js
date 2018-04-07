let User = require('../models/user');
let mongoose = require('mongoose');
let _ = require('lodash');
let Projet = require('../models/projet');
let parse = require('../helpers/errorParse');
let notification = require('../models/notification');

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

exports.setAffectation = function(req,res){
    let data = req.body.data;
    let agents = [];
    User.update({'affectation.projet' :req.body.projet,'perimetre.province':req.user.perimetre.province,'role':'agent'},{ $pull: {"affectation": {'projet':req.body.projet} } },{multi: true},function(err,results){
        console.log(results);
            data.forEach(commune => {
        if(commune.agents.length > 0){
            commune.id_agents.forEach(agent => {
                if(!agents.includes(agent)){
                    agents.push(agent)
                }
            })
        }

    });

        console.log(agents)
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
           user.save();
        })   
    });

    res.status(200).json('saved');
    return req.body
    })

}



exports.deleteUser = function (req, res) {
    User.findById(req.params.user_id,function(err,user){
        if(err){
            return res.status(500).json(err)
        }
        if(user.affectation.length > 0 ){
           return res.status(500).json({error:'affectation',message:'Impossible de supprimer cet utilisateur il est affecté à une enquête'})
        }
        else if(user.role == 'controleur'){
            let query = {['validation.'+user.perimetre.region]:{$elemMatch: {agent: user._id.toString()} }};
            console.log(query)
            Projet.count(query).exec(function(err,count){
                if(err){
                    return res.status(500).json(err)
                }
                else if(count > 0) {
                    return res.status(500).json({error:'affectation',message: 'Impossible de supprimer cet utilisateur il est affecté à une enquête'})
                }
                else{
                    User.remove({_id :req.params.user_id}, function (err, user) {
                        return res.json(user)
                    });
                }

            });
        }else{
            User.remove({_id :req.params.user_id}, function (err, user) {
                res.json(user)
            });
        }


    })
};

exports.createUser = function(req, res ,next){
    data = req.body;
    data.id_createur = req.user._id;
    data.plaintext = req.body.password;
    if(req.body.role === 'superviseurR' || req.body.role === 'admin' || req.body.role === 'controleur'){
        req.body.province = null;
        req.body.office = null;
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
        if(err) return res.status(500).send(err);
        if(!user){
                console.log("user not found creating new one");
                let newUser = new User(data);
                console.log(newUser);
                newUser.save(function(err){
                    if(err) {
                        err = parse(err);
                        if(err.path == 'email'){
                            return res.status(500).send({error:err.path,message: 'Cet '+err.path +' est déjà utilisé'});
                        }else{
                            return res.status(500).send({error:err.path,message: 'Ce '+err.path +' est déjà utilisé'});
                        }
                    }
                     res.status(200).send(newUser)
                })
        }else{
            console.log("user Found !");
            if(user.role === 'controleur'){
            let query = {['validation.'+user.perimetre.region]:{$elemMatch: {agent: user._id.toString()} }};
            console.log(query)
                Projet.count(query).exec(function(err,count){
                    if(err){
                        return res.status(500).json(err)
                    }
                    if(count > 0) {
                        return res.status(500).json({error:'affectation',message: 'Impossible de modifier cet utilisateur il est affecté à une enquête'})
                    }
                    handler(user,data)
                });

            }else if(user.role == 'agent' && user.affectation.length !== 0){
                return res.status(500).json({error:'affectation',message: 'Impossible de modifier cet utilisateur il est affecté à une enquête'})
            }else{
                handler(user,data)

            }
            }

    })
    function handler(user,data) {
        _.merge(user,data);
        user.save( function(err){
            console.log("trying to save " + user);
            console.log(parse(err));
            if(err) {
                err = parse(err);
                if(err.path == 'email'){
                    return res.status(500).send({error:err.path,message: 'Cet '+err.path +' est déjà utilisé'});
                }else{
                    return res.status(500).send({error:err.path,message: 'Ce '+err.path +' est déjà utilisé'});
                }


                // return res.status(500).send({error:'login',message: 'Ce login est déjà utilisé'});
            }
            return res.status(200).send(user)
        })
    }

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
};

exports.clearNotification  = function(req,res){
    notification.update({'user':mongoose.Types.ObjectId(req.user.id)},{'vue':true},{multi: true}).exec(function(err,user){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(user)

    })
};