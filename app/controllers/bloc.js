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
    query = {"theme": req.query.theme,
    "perimetre.region": perimetre.region,
    "perimetre.province": perimetre.province,
    "perimetre.commune": perimetre.commune};

    Bloc.find(query).exec(function(err, blocs){
        if(err) {
            res.send(err);
        }
        res.json(blocs)
    })

}
exports.createBloc = function(req, res ,next){
    Bloc = new Bloc({
            name : req.body.name,
            theme : req.body.theme,
            fields : req.body.fields,
            id_createur : req.user._id,
            perimetre:{
                region:'1',
                province:'2',
                commune:'3'
            }
        })

    Bloc.save(function (err, bloc) {
        if(err){
            res.send(err)
        }
        res.status(201).json({
            bloc: bloc
        })
    })
};

exports.updateBloc = function (req, res) {

    Bloc.findById({_id : req.params.bloc_id},function(err, bloc){
        if(err) {
            res.send(err)
        }

        bloc.name = req.body.name;
        bloc.theme = req.body.theme;
        bloc.fields = req.body.fields;

        bloc.save(function (err, updatedBloc) {
            if(err) {
                res.send(err)
            }

            res.send(updatedBloc)

        })

    })
};

exports.getBlocsByTheme = function(req, res) {
    Bloc.find({'theme':req.body.theme}, function(err, blocs){
        if(err){
            res.send(err)
        }
        res.json(blocs)
    })
}