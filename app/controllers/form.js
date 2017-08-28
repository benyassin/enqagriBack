var Form = require('../models/form');


exports.createForm = function(req, res , next){
    Form = new Bloc({
        name : req.body.name,
        theme: req.body.theme,
        date_debut : req.body.date_debut,
        date_fin : req.body.date_fin,
        geometry : req.body.geometry,
        blocs : req.body.blocs,
        id_createur : req.user._id,
    });
    Form.save(function (err, form){
        if(err){
            res.send(err)
        }
        res.status(201).json({
            form: form
        })
    })
};