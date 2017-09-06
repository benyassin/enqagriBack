var Form = require('../models/form');

exports.createForm = function(req, res , next){
    form = new Form ({
        name : req.body.name,
        theme: req.body.theme,
        date_debut : req.body.date_debut,
        date_fin : req.body.date_fin,
        geometry : req.body.geometry,
        blocs : req.body.blocs,
        id_createur : req.user._id,
        perimetre : req.user.perimetre
    });
    form.save(function (err, form){
        if(err) {
          return res.send(err)
        }
        res.status(201).json(form)
    })
};

exports.getForms = function(req,res) {
    let query;
    var perimetre = req.user.perimetre
    //mongoose ignore les attribute null
    query = {
        "perimetre.region": perimetre.region,
        "perimetre.province": perimetre.province,
        "perimetre.commune": perimetre.commune};

    Form.find({}, function (err,forms) {
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