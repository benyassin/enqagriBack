var Perimetre = require('../models/perimetre')


exports.getSegment = function(req,res,next){
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