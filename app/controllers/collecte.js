var Collecte = require('../models/collecte')


exports.storeCollecte = function(req,res,next){
    console.log(req)
    let user = req.user._id
    data = req.body
    data.agent = user
    console.log(data)
    Collecte.create(data,function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collecte._id)
    })
}
exports.getCollectes = function(req, res, next){
    if(!req.params.id_collecte){
    Collecte.find({},'projet').populate('projet','name theme').exec(function(err,collectes){
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
