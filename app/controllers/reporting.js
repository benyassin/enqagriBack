let Reporting = require('../models/reporting');
let Collecte = require('../models/collecte');


exports.getReports = function(req,res,next){
    let test = {};
    Reporting.find({}).exec(function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        test.daily = data
    });
    Reporting.aggregate([
        // {$project: {"polygone": 1,"polyline":1,"point":1}},
        {$group:{"_id":null,point:{$sum:"$point"},polygone:{$sum:"$polygone"},polyline:{$sum:"$polyline"},parcelle:{$sum:"$parcelle"},exploitation:{$sum:"$exploitation"}}},
    ]).exec(function(err,results) {
        if(err){
            return res.status(400).json(err)
        }
       test.aggregated =results;
        res.status(200).json(test)
    })
};

exports.aggregate = function(req,res,next){
    // Reporting.aggregate([
    //     // {$project: {"polygone": 1,"polyline":1,"point":1}},
    //     {$group:{"_id":null,point:{$sum:"$point"},polygone:{$sum:"$polygone"},polyline:{$sum:"$polyline"},parcelle:{$sum:"$parcelle"},exploitation:{$sum:"$exploitation"}}},
    // ]).exec(function(err,results) {
    //     if(err){
    //         return res.status(400).json(err)
    //     }
    //     res.status(200).json(results)
    // })
};

exports.aggregatee = function(req,res,next){
    Collecte.aggregate([
        {$match:{}},
      { $project:{"collecte":{"$size":'$collecte'}}},
      { $group:{"_id":null,"nbrparcelle":{"$sum":"$collecte"}}}
      ]).exec(function(err,results) {
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(results)
      })
}