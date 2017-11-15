var Projet = require('../models/projet');
var mongoose = require('mongoose');

exports.createProjet = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};
    data.perimetre= {'region': data.region,'province': data.province}

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
    let query = [];

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
        Projet.find({}).exec(function(err,projets){
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).json(projets)
        })
    }else{
    Projet.find()
          .populate({
              path:'perimetre.region',
              match: {
                  id_region: perimetre.region
              }  
          }).populate({
            path:'perimetre.province',
            match: {
                id_province:perimetre.province
            }
            }).exec(function(err, projets){
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


exports.getProjetsByRoleMobile = function (req, res, next){
    perimetre = req.user.perimetre;
    console.log("perimetre utilist",perimetre)    
    Projet.find()
          .populate({
              path:'perimetre.region',
              select:'-geometry',
              match: {
                  id_region: perimetre.region
              }  
          }).populate({
            path:'perimetre.province',
            select:'-geometry',
            match: {
                id_province:perimetre.province
            }
            }).populate({path:'forms',select:'name geometry theme id_fields',populate:{path:'fields'}})
            .exec(function(err, projets){
              if(err) {
                  return res.status(500).send(err)
              }
              console.log("list des projets",projets)
                projets = projets.filter(function(projet){
                    return projet.perimetre.province.length > 0
                })
                res.status(200).json(projets)
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


