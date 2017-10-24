var Collecte = require('../models/collecte')



exports.getCollectes = function(req, res, next){
    if(!req.params.id_collecte){
    Collecte.find({},'id_projet').populate('id_projet','name theme').exec(function(err,collectes){
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
