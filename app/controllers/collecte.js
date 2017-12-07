var Collecte = require('../models/collecte')
var mongoose = require('mongoose');
var qs = require('querystring')

exports.storeCollecte = function(req,res,next){
    let user = req.user._id;
    data = req.body;
    data.agent = user;
    data.region = req.user.perimetre.region;
    data.province = req.user.perimetre.province;
    data.validation = ['new','null','null','null','null'];
    console.log(req.user)
    console.log(data)
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
    let query = {
        'projet' : req.params.id_projet,
    };
    if(req.query.region != 0 ){
        query.region = req.query.region
    }
    if(req.query.province != 0){
        query.province = req.query.province
    }
    if(req.query.niveau != -1){
    query['validation.' + parseInt(req.query.niveau)] = req.query.status
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

exports.getCollecteEnTraitement = function(req,res,next){
    id_projet = req.params.id_projet
    qs.parse(req.query)
    Collecte.find({'projet':req.params.id_projet}).nor([{'validation.0':'new'},{'validation.1' : 'valid'}])
    .populate('agent')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}})
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
}

exports.validate = function(req,res,next){
    let data = req.body
    let query = {}
    switch(data.action){
        case 'valid':
        query['validation.' + parseInt(data.niveau+1)] = 'new'
        query['validation.' + parseInt(data.niveau)] = data.action
        break;
        case 'reject':
        query['validation.' + parseInt(data.niveau)] = 'null'        
        query['validation.' + parseInt(data.niveau-1)] = data.action
        break      
    }
    console.log(query)
    Collecte.update({_id:data.id},{ $set: query},function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collecte)
    })
}