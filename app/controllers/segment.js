var Perimetre = require('../models/perimetre');
var Segment = Perimetre.Segment;
var Collecte = require('../models/collecte');
let Support = require('../models/support');
let mongoose = require('mongoose');

exports.getSegmentWithCommunes = function(req,res,next){
    let id = req.query.id;
    if(req.query.id &&  req.query.cid){
        console.log(id);

        Support.find({$or: [{'properties.id_commune':parseInt(id),cid: mongoose.Types.ObjectId(req.query.cid)}, {'id_commune':id,cid: mongoose.Types.ObjectId(req.query.cid)}]}).exec(function(err,segments){
        if(err){
            console.log(err)
        }
        console.log('found :',segments.length );
        Perimetre.Commune.find({'id_commune':id}).exec(function(err,commune){
            if(err){
                console.log(err)
            }
            res.status(200).json({'commune':commune,'supports':segments})
        })

    })
    }else if (!req.query.cid){
        console.log('using this function');
        Perimetre.Commune.find({'id_commune':id}).exec(function(err,commune){
            if(err){
                console.log(err)
            }
            res.status(200).json({commune:commune,support:{}})
        })

        }else{
        res.status(500).json({error:'query',message: '"id commune" or "id collection" is missing'})
    }
};
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