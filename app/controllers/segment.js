var Perimetre = require('../models/perimetre')


exports.getSegment = function(req,res,next){
    if(req.query.id){
    console.log(req.query.id)
    let id = req.query.id
     Perimetre.Segment.find({'id_commune':id},'id geometry id_commune')
    .populate({path:'parcelles',select:'id geometry id_commune'})
    .exec(function(err,results){
        if(err){
            console.log(err)
        }
        res.status(200).json(results)
    })
}else{
    res.status(500).json({error:'query',message: 'id commune is missing'})
}
}