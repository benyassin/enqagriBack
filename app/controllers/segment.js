var Perimetre = require('../models/perimetre')
var Segment = Perimetre.Segment
var Collecte = require('../models/collecte')

exports.getSegmentWithCommunes = function(req,res,next){
    if(req.query.id){
    console.log(req.query.id)
    let id = req.query.id
     Perimetre.Segment.find({'id_commune':id},'id geometry id_commune')
    .populate({path:'parcelles',select:'id geometry id_commune'})
    .exec(function(err,segments){
        if(err){
            console.log(err)
        }
        Perimetre.Commune.find({'id_commune':id}).exec(function(err,commune){
            if(err){
                console.log(err)
            }
            res.status(200).json({'commune':commune,'segments':segments})
        })

    })
}else{
    res.status(500).json({error:'query',message: 'id commune is missing'})
}
}
exports.getSegment = function(req,res,next){
    Segment.findOne({'id':req.params.id_segment})
        .populate({path:'parcelles',select:'id geometry id_commune'})
        .exec(function(err,segment){
            Collecte.find({'collecte.0.data.0.id_segment':req.params.id_segment},'collecte.data.gjson collecte.data.numero',function(err,voisin){
                if(err){
                    return res.status(500).json(err)
                }

                res.status(200).json({'segment':segment,'voisin':voisin})
            })
        // res.status(200).json(segment)
        })

}