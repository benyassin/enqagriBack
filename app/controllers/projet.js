let Projet = require('../models/projet');
let Perimetre = require('../models/perimetre');
let Collecte = require('../models/collecte')
let mongoose = require('mongoose');
let Promise = require('es6-promise').Promise;
let User = require('../models/user');
let _ = require('underscore');
let Notification = require('../models/notification');

exports.createProjet = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};
    if(!data.cid){
        data.cid = null
    }
    console.log(req.body);
    let list = [];
    if(data.validation){
    Object.keys(data.validation).forEach(region => {
        data.validation[region].forEach(niveau => {
            list.push({user:niveau.agent,type:'affectation',projet:data.name,vue:false})
        })
    });
    }
    data.perimetre= {'region': data.region || [],'province': data.province || []};
    Projet.update(query, data,{runValidators: true, upsert: true,new:true}, function(err, projet) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate name
                    return res.status(500).send({error:'name', message: 'Ce nom est déjà utilisé'});
                  }
            }
            list.forEach((_) =>{
                Notification.update({user:_.user,projet:_.name,vue:false},_,{upsert:true}).exec()
            })
            res.status(200).json(projet)

        })

};
exports.getnotification = function(req,res,next){
    Notification.find({},function(err,response){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(response)
    })
}

exports.getProjets = function(req,res,next){
    let query = {};

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate('forms','name geometry theme id_fields')
          .populate({path:'perimetre.region',select:'name id_region',options: { sort: { 'name': 1 }}})
          .populate({path:'perimetre.province',select:'name id_province id_region',options: { sort: { 'name': 1 }}})
        .populate('cid')
          .exec(function(err,projets){
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(projets)
    })
}

exports.getProjetsByPerimetre = function (req, res, next){
    perimetre = req.user.perimetre;
    if(req.user.role === 'admin'){
        Projet.find({}).populate({
            path:'perimetre.region',
            select:'-geometry',
            options: { sort: { 'name': 1 }}
        })
        .populate({
          path:'perimetre.province',
          select:'-geometry',
          options: { sort: { 'name': 1 }}
         })
            .populate({path:'forms'})
            .exec(function(err,projets){
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).json(projets)
        })

    }else{
        let populate = {
            path:'perimetre.province',
            select:'-geometry',
        }
        if(req.user.role ==="superviseurP"){
            populate.match= {
                id_province: perimetre.province
            }  
        }
    Projet.find()
          .populate({
              path:'perimetre.region',
              select:'-geometry',
              match: {
                  id_region: perimetre.region
              }  
          })
        .populate('forms','name geometry theme id_fields')

        .populate(populate).exec(function(err, projets){
              if(err) {
                  return res.status(500).send(err)
              }
              if(req.user.perimetre.province){
                projets = projets.filter(function(projet){
                    return projet.perimetre.province.length > 0
                    
                })
                res.status(200).json(projets)
              }else{
                projets = projets.filter(function(projet){
                return projet.perimetre.region.length > 0
                })
                res.status(200).json(projets)
            }
        })
    }
}


exports.getProjetsMobile = function(req,res){
    let query = [];

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
            .populate({path:'forms',select:'name geometry theme id_fields',populate:{path:'fields'}})
          .populate({path:'perimetre.region',select:'name id_region'})
          .populate({path:'perimetre.province',select:'name id_province id_region'})
          .exec(function(err,projets){
        if(err){
            return res.status(400).send(err)
        }
        res.status(200).json(projets)
    })
}

exports.getProjetsByRoleMobile = function(req,res){
        User.findById(req.user._id)

        .populate({path:'affectation.projet',populate:{path:'cid'}})
        .populate({path:'affectation.projet',select:'-perimetre -extrapolation -validation',populate:{path:'forms',select:'name geometry theme id_fields',populate:{path:'fields'}}})
        .populate({path:'communes',select:'-geometry'})
        .exec(function(err,results){
            if(err){
                return res.status(500).json(err)
            }

            let affectation = [];
            results.affectation.forEach(f =>{
                if(f.projet && f.projet !== null && f.projet.is_active == true){
                    affectation.push(f)
                }
            });
            res.status(200).json(affectation)

          //  res.status(200).json(affectation)
})
}

exports.getProjetsByRoleWeb = function(req,res){
    User.findById(req.user._id)
    .populate('forms','name geometry theme id_fields')
    .populate({path:'affectation.projet',populate:{path:'cid'}})
    .populate({path:'affectation.projet',populate:{path:'perimetre.region',select:'name id_region'}})
    .populate({path:'affectation.projet',populate:{path:'perimetre.province',select:'name id_region id_province'}})

    .exec(function(err,results){
        if(err){
            res.status(500).json(err)
        }
        let affectation = [];
        results.affectation.forEach(f =>{
            if(f.projet && f.projet !== null){
                affectation.push(f)
            }
        });
        res.status(200).json(affectation)
})
}
 
exports.controllerProjets = function(req, res){
    let test = {}
    test['validation.' + req.user.perimetre.region + '.agent'] = req.user._id.toString();
    console.log(test)
    Projet.find(test)
        .populate('forms','name geometry theme id_fields')
        .populate({path:'perimetre.region',select:'name id_region',options: { sort: { 'name': 1 }}})
        .populate({path:'perimetre.province',select:'name id_province id_region',options: { sort: { 'name': 1 }}})
        .exec(function (err,projets){
            if(err){
                return res.json(err)
            }
            res.json(projets)
        })
};

exports.Check = function(req,res){
    Collecte.count({projet:req.params.projet_id}).exec(function(err,count) {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(count)
    })
};
exports.deleteProjet = function (req, res) {
    Collecte.count({projet:req.params.projet_id}).exec(function(err,count){
        if(err){
            return res.status(500).json(err)
        }
        if(count > 0){
            return res.status(500).json({error:'collecte',message: 'Une ou plusieurs collectes sont liées à cette enquête'})
        }
        User.findOne({'affectation.projet':req.params.projet_id}).exec(function(err,user){
            if(err){
                return res.status(500).json(err)
            }
            if(!user){
                remove(req.params.projet_id)
            }else{
            res.status(500).json({error:'User',message: 'Un ou plusieurs utilisateurs sont liées à cette enquête'})
            }
        })
    });


    function remove(id) {
        Projet.remove({_id :id}, function (err, projet) {
            if(err){
                return res.json(err)
            }
            res.json(projet)
        });
    }
}

exports.toggle = function (req, res){
    Projet.findById(req.params.projet_id).then((collecte) => {
        collecte.is_active = !collecte.is_active
        collecte.save()
        res.status(200).json({is_active:collecte.is_active})
    }).catch((e) =>{
        res.status(500).json({error:e.message,is_active:false})
    })
}

exports.toggleAchived = function (req, res){
    Projet.findById(req.params.projet_id).then((collecte) => {
        collecte.archived = !collecte.archived
        collecte.save()
        res.status(200).json({archived:collecte.archived})
    }).catch((e) =>{
        res.status(500).json({error:e.message,archived:false})
    })
}

