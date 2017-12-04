var Fields = require('../models/fields');
var mongoose = require('mongoose')



exports.createFields = function(req, res ,next){
    data = req.body;
    var keys = new Array;
    var types = ['container','htmlelement','hidden','columns','fieldset','table','well','datagrid','editgrid','panel']

    query = {form : req.params.form_id};
    let toinsert = {}
    toinsert.components = req.body.components
    toinsert.form = req.params.form_id
    toinsert.display = req.body.display

    var obj = toinsert.components
    
    function searchObj(obj){
    for (var key in obj){
        var value = obj[key];
        if(types.includes(obj['type'])){
            if (typeof value === 'object') {
                searchObj(value);
    }	
    }else{
    if (typeof value === 'object') {
        searchObj(value);
    }
    if (key === 'key') {
        keys.push(value);
    }
    }
    }
}
    searchObj(obj)
    console.log(keys)

    
    // Fields.update(query, toinsert,{upsert: true, setDefaultsOnInsert: true,'new': true}, function (err, bloc) {
    //     if (err) {
    //       return res.send(err)
    //     }
    //     res.status(201).send(req.body);
    // })

};

exports.getFields = function(req,res,next){
    let query = {'form': req.params.form_id}
    Fields.findOne(query,function(err, fields){
        if(err) {
         return res.status(400).send(err);
        }
        res.status(200).json(fields)
    })
}


exports.getForm = function(req,res, next){
    let query = {'form' : req.params.form_id}
    Fields.findOne(query).populate('form').exec(function(err,field){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(field)
    })
}