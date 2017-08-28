var Bloc = require('../models/bloc');


exports.createBloc = function(req, res ,next){
    Bloc = new Bloc({
            name : req.body.name,
            theme : req.body.theme,
            fields : req.body.fields,
            id_createur : req.user._id
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

exports.getBlocs = function(req, res){
    Bloc.find(function(err, blocs){
        if(err) {
            res.send(err);
        }
        res.json(blocs)
    })

}

exports.getBlocsByTheme = function(req, res) {
    Bloc.find({'theme':req.body.theme}, function(err, blocs){
        if(err){
            res.send(err)
        }
        res.json(blocs)
    })
}