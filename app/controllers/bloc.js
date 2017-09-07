/*
Bloc Controller 
Get // create // delete

Todo : refactor queries // rajouter des regle 
*/


var Bloc = require('../models/bloc');
var query = {};

//return les bloc par perimetre et theme
exports.getBlocs = function(req, res){
    var perimetre = req.user.perimetre
    //mongoose ignore les attribute null
    query = {
    "perimetre.region": perimetre.region,
    "perimetre.province": perimetre.province,
    "perimetre.commune": perimetre.commune};

    if (req.query.theme !== 'all'){
        query.theme = req.query.theme
    }

    Bloc.find(query,function(err, blocs){
        if(err) {
         return res.send(err);
        }
        res.json(blocs)
    })

}
exports.createBloc = function(req, res ,next){
   let bloc = new Bloc ({
            name : req.body.name,
            theme : req.body.theme,
            fields : req.body.fields,
            id_createur : req.user._id,
            perimetre: req.user.perimetre
        })

    bloc.save(function (err, bloc) {
        if(err){
        return  res.send(err)
        }
        res.status(201).json({bloc: bloc})
    })
};

exports.updateBloc = function (req, res) {
    data = req.body
    User.findOneAndUpdate({_id : req.params.bloc_id},data,function(err, user){
        if(err) {
            res.send(err)
        }
        return res.send(user);
    })
};

exports.deleteBloc = function (req, res, next) {
    Bloc.remove({_id :req.params.bloc_id}, function (err, bloc) {
        if(err){
            return res.json(err)
        }
        res.json(bloc)
    });
}