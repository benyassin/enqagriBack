var Form = require('../models/form');
var mongoose = require('mongoose')

// exports.createForm = function(req, res , next){
//     form = new Form ({
//         name : req.body.name,
//         theme: req.body.theme,
//         date_debut : req.body.date_debut,
//         date_fin : req.body.date_fin,
//         geometry : req.body.geometry,
//         blocs : req.body.blocs,
//         id_createur : req.user._id,
//         perimetre : req.user.perimetre
//     });
//     form.save(function (err, form){
//         if(err) {
//           return res.send(err)
//         }
//         res.status(201).json(form)
//     })
// };

exports.getForms = function(req,res) {
    var perimetre = req.user.perimetre
    //mongoose ignore les attribute null
    query = {
        "perimetre.region": perimetre.region,
        "perimetre.province": perimetre.province,
        "perimetre.commune": perimetre.commune};

    Form.find({}).populate('blocs',['name','fields']).exec(function (err,forms) {
        if(err){
         return res.json(err)
        }
        res.json(forms)
        })

}
exports.deleteForm = function (req, res, next) {
    Form.remove({_id :req.params.form_id}, function (err, form) {
        if(err){
            return res.json(err)
        }
        res.json(form)
    });
}


exports.createForm = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};
    data.id_createur = req.user._id;
    data.perimetre = req.user.perimetre;


    Form.update(query, data,{upsert: true,'new': true}, function(err, form) {
            if (err) {
            return  res.send(err)
            }
            res.status(201).json(form);
        })


};