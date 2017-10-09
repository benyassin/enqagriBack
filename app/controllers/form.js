var Form = require('../models/form');
var Fields = require('../models/fields');
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

exports.getForms = function(req, res, next) {
    let query = {}
    if(req.params.theme){
        query = {"theme": req.params.theme}
    }
    //mongoose ignore les attribute null

    Form.find(query).populate('fieldss').exec(function (err,forms) {
        if(err){
         return res.json(err)
        }
        res.json(forms)
        })

}

/*exports.getForm = function(req,res){

    query = {"_id": req.params.form_id}
    Form.find(query).populate('fields',['json']).exec(function(err,form){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(form)
    })
}*/

exports.getFormswithFields = function(req,res) {
    var perimetre = req.user.perimetre
    //mongoose ignore les attribute null
    query = {
        "perimetre.region": perimetre.region,
        "perimetre.province": perimetre.province,
        "perimetre.commune": perimetre.commune};

    Form.find({}).populate('fields',['json']).exec(function (err,forms) {
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
    let newfield = {};
    if(data.duplicate){
        Fields.findOne({'form': data.id_fields},function(err,field){
            if(err){
                return res.status(400).send(err)
            }
            data.id_fields = '_' + Math.random().toString(36).substr(2, 9);
            newfield.display = field.display;
            newfield.components  = field.components;
            newfield.form = data.id_fields;
            Fields.create(newfield,function(err,test){
                if(err){
                    return res.status(401).send(err)
                }
            });
            done(data)
        })
    }else{
        Form.update(query, data,{upsert: true,'new': true}, function(err, form) {
            if (err) {
                return  res.send(err)
            }
            res.status(201).json(form);
        })
    }
    let done = function(data){
        console.log(data);
        Form.update(query, data,{upsert: true,'new': true}, function(err, form) {
            if (err) {
                return  res.send(err)
            }
            res.status(201).json(form);
        })
    }
        // console.log(data)

    };


