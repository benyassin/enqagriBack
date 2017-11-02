var Collecte = require('../models/collecte')


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
        {$match: {createdAt:{$gte:new Date("2017-01-01")}}},
        {$group:{_id:{"year":{"$year":"$createdAt"},
        "month":{"$month":"$createdAt"},
        "day":{"$dayOfMonth":"$createdAt"}}}},
        {$unwind: "$collecte"},
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
    .populate('projet','name theme')
    .populate('agent','nom prenom')
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
    }else{
        Collecte.findOne({'_id':req.params.id_collecte},function(err,collectes){
            if(err){
                return res.status(500).json(err)
            }
            res.status(200).json(collectes)
        })
    }
}
