let Projet = require('../models/projet');
let Perimetre = require('../models/perimetre');
let mongoose = require('mongoose');
let Promise = require('es6-promise').Promise;
let User = require('../models/user');
let _ = require('underscore');

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

    data.perimetre= {'region': data.region || [],'province': data.province || []};
    Projet.update(query, data,{runValidators: true, upsert: true}, function(err, projet) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate name
                    return res.status(500).send({error:'name', message: 'Ce nom est déjà utilisé'});
                  }
            }
            res.status(200).json(projet);
        })

};

exports.getProjets = function(req,res,next){
    let query = {};

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate('forms','name geometry theme id_fields')
          .populate('perimetre.region','name id_region' )
          .populate('perimetre.province','name id_province id_region')
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
            select:'-geometry'})
        .populate({
          path:'perimetre.province',
          select:'-geometry',
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


exports.getProjetsMobile = function(req,res,next){
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
            res.status(200).json(results.affectation)
})
}

exports.getProjetsByRoleWeb = function(req,res){
    User.findById(req.user._id)
    .populate('forms','name geometry theme id_fields')
    .populate({path:'affectation.projet',populate:{path:'cid'}})
    .populate({path:'affectation.projet',populate:{path:'perimetre.region',select:'name id_region'}})
    .populate({path:'affectation.projet',populate:{path:'perimetre.province',select:'name id_region id_province'}})

    .exec(function(err,results){
        res.status(200).json(results.affectation)
})
}
 
exports.controllerProjets = function(req, res){
    let test = {}
    test['validation.' + req.user.perimetre.region + '.agent'] = req.user._id.toString();
    console.log(test)
    Projet.find(test)
        .populate('forms','name geometry theme id_fields')
        .populate({path:'perimetre.region',select:'name id_region'})
        .populate({path:'perimetre.province',select:'name id_province id_region'})
        .exec(function (err,projets){
            if(err){
                return res.json(err)
            }
            res.json(projets)
        })
}


exports.deleteProjet = function (req, res, next) {
    Projet.remove({_id :req.params.projet_id}, function (err, projet) {
        if(err){
            return res.json(err)
        }
        res.json(projet)
    });
}


