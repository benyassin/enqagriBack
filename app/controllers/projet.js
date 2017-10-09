var Projet = require('../models/projet');
var mongoose = require('mongoose');

exports.createProjet = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};
    data.perimetre= {'region': data.region,'province': data.province}

    Projet.update(query, data,{upsert: true}, function(err, form) {
            if (err) {
            return  res.status(400).send(err)
            }
            res.status(200).json(form);
        })

};

exports.getProjets = function(req,res,next){
    let query = [];

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate('forms','name geomtry theme')
          .populate('perimetre.region','name id_region' )
          .populate('perimetre.province','name id_province id_region')
          .exec(function(err,projets){
        if(err){
            return res.status(400).send(err)
        }
        res.status(200).json(projets)
    })
}


exports.getProjets = function(req,res,next){
    let query = [];

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate('forms','name geometry theme')
          .populate('perimetre.region','name id_region' )
          .populate('perimetre.province','name id_province id_region')
          .exec(function(err,projets){
        if(err){
            return res.status(400).send(err)
        }
        res.status(200).json(projets)
    })
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


exports.deleteProjet = function (req, res, next) {
    Projet.remove({_id :req.params.projet_id}, function (err, projet) {
        if(err){
            return res.json(err)
        }
        res.json(projet)
    });
}
