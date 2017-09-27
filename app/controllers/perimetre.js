var Region = require('../models/region');
var Province = require('../models/province')
var mongoose = require('mongoose')


exports.getProvinces = function(req, res ,next){
    let query = {"id_region" : req.params.id_region}
 Province.find(query,'id_province name').exec(function(err,provinces){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(provinces)
 })
}

exports.getRegion = function(req, res ,next){
 Region.find({},'id_region name').exec(function(err,regions){
     if(err){
         return res.status(400).json(err);
     }
     res.status(200).json(regions)
 })
}

exports.createRegion = function(req, res, next){
    Region.create({name : 'testregion'},function(err, region){
     if(err){
         return res.status(400).json(err);
     }  
     res.status(200).json(region)
    })
}
