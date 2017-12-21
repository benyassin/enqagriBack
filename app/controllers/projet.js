var Projet = require('../models/projet');
var Perimetre = require('../models/perimetre');
var mongoose = require('mongoose');

var q = require('q')

exports.createProjet = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};
    data.perimetre= {'region': data.region || [],'province': data.province || []}

    Projet.update(query, data,{runValidators: true, upsert: true}, function(err, projet) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate name
                    return res.status(500).send({error:'name', message: 'Ce nom est déjà utilisé'});
                  }
            }
            res.status(200).json(projet);
        })

};

exports.getProjets = function(req,res,next){
    let query = [];

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate('forms','name geometry theme id_fields')
          .populate('perimetre.region','name id_region' )
          .populate('perimetre.province','name id_province id_region')
          .exec(function(err,projets){
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(projets)
    })
}
exports.getProjetsByPerimetre = function (req, res, next){
    perimetre = req.user.perimetre;
    if(req.user.role === 'admin'){
        Projet.find({}).populate({
            path:'perimetre.region',
            select:'-geometry'})
        .populate({
          path:'perimetre.province',
          select:'-geometry',
         }).exec(function(err,projets){
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).json(projets)
        })
    }else{
        let populate = {
            path:'perimetre.province',
            select:'-geometry',
        }
        if(req.user.role ==="superviseurP"){
            populate.match= {
                id_province: perimetre.province
            }  
        }
    Projet.find()
          .populate({
              path:'perimetre.region',
              select:'-geometry',
              match: {
                  id_region: perimetre.region
              }  
          })
          .populate(populate).exec(function(err, projets){
              if(err) {
                  return res.status(500).send(err)
              }
              if(req.user.perimetre.province){
                projets = projets.filter(function(projet){
                    return projet.perimetre.province.length > 0
                    
                })
                res.status(200).json(projets)
              }else{
                projets = projets.filter(function(projet){
                return projet.perimetre.region.length > 0
                })
                res.status(200).json(projets)
            }
        })
    }
}


exports.getProjetsMobile = function(req,res,next){
    let query = [];

    if(req.params.projet_id){
        query = {'_id': req.params.projet_id}
    }
    Projet.find(query)
          .populate({path:'forms',select:'name geometry theme id_fields',populate:{path:'fields'}})
          .populate({path:'perimetre.region',select:'name id_region'})
          .populate({path:'perimetre.province',select:'name id_province id_region'})
          .exec(function(err,projets){
        if(err){
            return res.status(400).send(err)
        }
        res.status(200).json(projets)
    })
}


exports.getProjetsByRoleMobile = function (req, res, next){
    let affectation = req.user.affectation;
    // console.log("perimetre utilist",perimetre)    
    // Projet.find()
    //       .populate({
    //           path:'perimetre.region',
    //           select:'-geometry',
    //           match: {
    //               id_region: perimetre.region
    //           }  
    //       }).populate({
    //         path:'perimetre.province',
    //         select:'-geometry',
    //         match: {
    //             id_province:perimetre.province
    //         }
    //         }).populate({path:'forms',select:'name geometry theme id_fields',populate:{path:'fields'}})
    //         .exec(function(err, projets){
    //           if(err) {
    //               return res.status(500).send(err)
    //           }
    //           console.log("list des projets",projets)
    //             projets = projets.filter(function(projet){
    //                 return projet.perimetre.province.length > 0 && projet.forms.length > 0
    //             })
    //             res.status(200).json(projets)
    //     })
    let ayoub = []
    let promises = []
    length = affectation.length
    // let i = 0
    for (let element of affectation){
        if(element.communes.length > 0){             
            var promise2 = Projet.findById(element.projet).exec(function(err,rprojet){
                if(err) {
                   return console.log(err)
                }
                var promise = Perimetre.Commune.find({
                    'id_commune': { $in: element.communes}
                }).exec(function(err,communes){
                    if(err) {
                       return console.log(err)
                    }
                    // console.log(communes)
                    
                    var newVar = rprojet
                    newVar.communes = communes
                    // console.log(newVar)
                    ayoub.push(newVar)
                    // rprojet['AYOUUUBBBBBB'] = communes
                    // projets.push(rprojet)             
                    // console.log(rprojet)
                })
                promises.push(promise,promise2)
            })
            
        }
        q.all(promises).then(console.log(ayoub))
        // console.log('lenght ayoub : ' ,ayoub.length)
        // console.log('length affecaat', affectation.length) 
        // if(ayoub.length == affectation.length){
        //     console.log('marouane')
        //     console.log(ayoub)

        // }
    };

}
 
exports.controllerProjets = function(req, res,next){
    Projet.find({'validation.agent':req.user._id})          
    .populate({path:'perimetre.region',select:'name id_region'})
    .populate({path:'perimetre.province',select:'name id_province id_region'})
    .exec(function (err,projets){
        if(err){
            return res.json(err)
        }
        res.json(projets)
    })
}

exports.deleteProjet = function (req, res, next) {
    Projet.remove({_id :req.params.projet_id}, function (err, projet) {
        if(err){
            return res.json(err)
        }
        res.json(projet)
    });
}


