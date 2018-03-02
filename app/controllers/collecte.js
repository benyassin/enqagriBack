var Collecte = require('../models/collecte');
var mongoose = require('mongoose');
var qs = require('querystring');

exports.storeCollecte = function(req,res,next){
    let user = req.user._id;
    data = req.body;
    data.agent = user;
    // data.region = req.user.perimetre.region;
    // data.province = req.user.perimetre.province;
    data.validation = ['new','null','null','null','null'];
    console.log(req.user);
    console.log(data);
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

exports.updateCollecte = function(req,res){
    Collecte.findById(req.body.id).exec(function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        console.log(collecte)
        console.log('/////////////////REQ BODY//////////////////')
        console.log(req.body)
        if(collecte != null){
        collecte.exploitation = req.body.exploitation;
        collecte.collecte = req.body.collecte;

        collecte.save().then(function(err,savedoc){
            if(err){
                return res.status(500).json(err)
            }
            console.log(savedoc);
            res.status(200).json(savedoc)

        });
        console.log(req.body);
        }
    })
};

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
        .populate({path:'projet',select:'name theme validation'})
        .populate('agent')
        .populate('collecte.data.id_support')
        .populate({path:'agent', populate: { path: 'region province commune',select:'name'}
        })
        .exec(function(err,collecte){
            if(err){
                return res.status(500).json(err)
            }
            let listsupport = [];
            console.log(collecte)
            collecte.collecte.forEach(c =>{


                c.data.forEach(element => {
                    if(!listsupport.includes(element.id_support._id)){
                        listsupport.push({'collecte.data.id_support':element.id_support._id});
                    }
                });

            });
            Collecte.find({'projet':collecte.projet}).or(listsupport).exec(function(err,voisin){
                if(err){
                    return res.status(500).json(err)
                }
                let result = [];
                voisin.forEach(element =>{
                    if(element._id.toString() !== collecte._id.toString()) {

                        element.collecte.forEach(c => {
                            c.data.forEach(p => {
                                result.push(p.gjson)
                            })
                        })
                    }
                });

                res.status(200).json({'collecte':collecte,'voisin':result})
            })
        })

    }
};


exports.getCollecteByProjet = function (req,res, next){
    id_projet = req.params.id_projet;
    qs.parse(req.query)
    let query = {
        'projet' : req.params.id_projet,
    };
    if(req.query.region != 0 ){
        query.region = req.query.region
    }
    if(req.query.province != 0){
        query.province = req.query.province
    }
    if(req.query.commune != 0){
        query.commune = req.query.commune
    }
    if(req.query.niveau != -1){
    query['validation.' + parseInt(req.query.niveau)] = req.query.status
    }
    if(req.user.role == 'agent'){
        query.agent = req.user._id
    }
    console.log(query)
    Collecte.find(query,'-gjson')
    .populate('agent')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}}).sort({createdAt: 'asc'})
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        // res.status(200).json(collectes)
        if(collectes.length > 0){
        let order = Object.keys(collectes[0].collecte[0].data[0].support);
        // collectes.push({order:order});
        res.status(200).json({collectes:collectes,order:order})
        }else{
            res.status(200).json({collectes:collectes,order:[]})
        }

    })

}

exports.getCollecteEnTraitement = function(req,res,next){
    id_projet = req.params.id_projet;
    
    qs.parse(req.query);
    let query = {
        'projet' : req.params.id_projet,
    };
    if(req.query.region != 0 ){
        query.region = req.query.region
    }
    if(req.query.province != 0){
        query.province = req.query.province
    }
    let test = {}
    test['validation.' +  req.query.index] = 'valid';

    console.log({'validation.0':'new'},test);
    Collecte.find(query).nor([{'validation.0':'new'},test])
    .populate('agent')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}}).sort({createdAt: 'asc'})
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
    if(req.body.rmessage){
        query.rmessage = req.body.rmessage
    }
    switch(data.action){
        case 'valid':
        query['validation.' + parseInt(data.niveau+1)] = 'new';
        query['validation.' + parseInt(data.niveau)] = data.action;
        query.rmessage = null
        break;
        case 'reject':
        query['validation.' + parseInt(data.niveau)] = 'null';
        query['validation.' + parseInt(data.niveau-1)] = data.action;
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

exports.getVoisin = function(req,res){

    Collecte.find({'projet':req.query.pid,'collecte.data.id_support':mongoose.Types.ObjectId(req.id.sid)},function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        let result = [];
        collecte.forEach(element =>{
            if(element._id !== cid) {
                element.collecte.forEach(c => {
                    c.data.forEach(p => {
                        result.push(p.gjson)
                    })
                })
            }
        })
        res.status(200).json(result)
    })
}