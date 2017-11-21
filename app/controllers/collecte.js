var Collecte = require('../models/collecte')
var mongoose = require('mongoose');
var qs = require('querystring')

exports.storeCollecte = function(req,res,next){
    let user = req.user._id
    data = req.body
    data.agent = user
    Collecte.create(data,function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collecte._id)
    })
}

// exports.aggregate = function(req,res,next){
//     Collecte.aggregate([
//         {$match:{}},
//       { $project:{"collecte":{"$size":'$collecte'}}},
//       { $group:{"_id":null,"nbrparcelle":{"$sum":"$collecte"}}}
//       ]).exec(function(err,results) {
//         if(err){
//             return res.status(400).json(err)
//         }
//         res.status(200).json(results)
//       })
// }


exports.aggregate = function(req,res,next){
    Collecte.aggregate([
        {$match: {}},
        {$unwind: "$collecte"},
        // {$group:{_id:{"year":{"$year":"$createdAt"},
        // "month":{"$month":"$createdAt"},
        // "day":{"$dayOfMonth":"$createdAt"}}}},
      { $group:{"_id":"$collecte.type","total":{"$sum": 1}}}
      ]).exec(function(err,results) {
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(results)
      })
}

exports.getCollectes = function(req, res, next){
    if(!req.params.id_collecte){
    Collecte.find({},'projet agent createdAt')
    .populate({path:'projet',select:'name theme validation'})
    .populate('agent')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}
    })
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
    }else{
        Collecte.findOne({'_id':req.params.id_collecte})
        .exec(function(err,collectes){
            if(err){
                return res.status(500).json(err)
            }
            res.status(200).json(collectes)
        })
    }
}


exports.getCollecteByProjet = function (req,res, next){
    id_projet = req.params.id_projet
    qs.parse(req.query)
    console.log(req.query)
    query = {
        'projet' : req.params.id_projet,
        'validation': req.query.niveau,
        'status': req.query.status
    }
    console.log(query)
    Collecte.find(query)
    .populate('agent')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}})
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
}
