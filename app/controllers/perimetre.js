let Region = require('../models/region');
let Province = require('../models/province');
let Commune = require('../models/commune');



exports.getProvinces = function(req, res ,next){
    let query = {"id_region" : req.params.id_region}
 Province.find(query,'id_province name').exec(function(err,provinces){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(provinces)
 })
};

exports.getRegion = function(req, res ,next){
 Region.find({},'id_region name').exec(function(err,regions){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(regions)
 })
};

exports.getCommunebyUser = function(req, res, next ){
    let query = {"id_province": req.user.perimetre.province};

    Commune.find(query,'id_commune name').exec(function(err,communes){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(communes)
    })
};

exports.getCommune = function(req, res, next ){
    let query = {"id_province": req.params.id_province};

    Commune.find(query,'id_commune name').exec(function(err,communes){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(communes)
    })
};