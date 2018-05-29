let Perimetre = require('../models/perimetre');
let fs = require('fs');




exports.getProvinces = function(req, res ,next){
    let query = {}
    if(req.params.id_region && req.params.id_region != 0){
        query = {"id_region" : req.params.id_region}
    }
    Perimetre.Province.find(query,'id_province name id_region').exec(function(err,provinces){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(provinces)
 })
};

exports.getRegion = function(req, res ,next){
    Perimetre.Region.find({},'id_region name').exec(function(err,regions){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(regions)
 })
};

exports.getCommunebyUser = function(req, res, next ){
    
    let query = {"id_province": req.user.perimetre.province};

    Perimetre.Commune.find(query,'id_commune name id_region',{sort: {name: 1}}).exec(function(err,communes){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(communes)
    })
};

exports.getCommune = function(req, res, next ){
    let query = {"id_province": req.params.id_province};

    Perimetre.Commune.find(query,'id_commune name id_region id_province',{sort: {name: 1}}).exec(function(err,communes){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(communes)
    })
};

exports.getDpa = function(req,res,next){
    let query = {};
    Perimetre.Dpa.find(query,function(err,dpas){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(dpas)
    })
}

exports.DpaOffice = function(req,res, next){
    json = {}
    Perimetre.Dpa.find({},function(err,dpas){
        json.dpa = dpas;
        Perimetre.Office.find({},function(err,offices){
            json.office = offices

            res.status(200).json(json)
        })
    })
}               