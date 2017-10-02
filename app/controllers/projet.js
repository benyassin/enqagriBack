var Projet = require('../models/projet')
var mongoose = required('mongoose')

exports.createForm = function (req, res, next) {

    data = req.body;
    if(!data._id){
        data._id = new mongoose.mongo.ObjectID()
    }
    query = {_id : data._id};


    Projet.update(query, data,{upsert: true}, function(err, form) {
            if (err) {
            return  res.status(400).send(err)
            }
            res.status(200).json(form);
        })


};
