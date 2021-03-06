var Fields = require('../models/fields');
var mongoose = require('mongoose');



exports.createFields = function(req, res ,next){
    data = req.body;

    query = {form : req.params.form_id};
    let toinsert = {};
    toinsert.components = req.body.components;
    toinsert.form = req.params.form_id;
    toinsert.display = req.body.display;



    Fields.update(query, toinsert,{upsert: true, setDefaultsOnInsert: true,'new': true}, function (err, bloc) {
        if (err) {
          return res.send(err)
        }
        res.status(201).send(req.body);
    })

};

exports.getExtrapolationFields = function(req,res){

    var types = ['container','htmlelement','hidden','columns','fieldset','editgrid','datagrid','table','well','panel'];

    Fields.findOne({'form':req.params.form_id},function(err,form){
        let fields = [];
        if(err){
            return res.status(400).send(err);
        }

        if(!form || form.components.length == 0){
            return res.status(200).json([])
        }

        function searchObj(obj){
            for (let key in obj){
                let component = obj[key];
                if(types.includes(component['type'])){
                    switch (component['type']) {
                        case 'columns':
                            for(let i = 0;i<component['columns'].length;i++){
                                searchObj(component['columns'][i]['components']);
                            }

                            break;
                        case 'table':
                            for(let i = 0;i<component['rows'].length;i++){
                                for(let r = 0;r<component['rows'][i].length;r++){
                                    searchObj(component['rows'][i][r]['components']);
                                }
                            }

                            break;
                        default:
                            searchObj(component['components']);

                            break;
                    }
                }else{
                    if(component['key'] === 'submit' || component['key'] === 'custom' ){
                        done() 
                    }
                    fields.push({'type':component['type'],key:component['key'],label:component['label'],values:component['data'] || component['values']});
                }
            }

        }

        searchObj(form['components']);

        function done() {
            res.status(200).json(fields);
        }
             

    })
}

exports.getkeys = function(id){

   return Fields.findOne({'form':id})
}


exports.filtre = function (obj) {
    var types = ['container','htmlelement','hidden','columns','fieldset','editgrid','datagrid','table','well','panel'];

    for (let key in obj){
        let component = obj[key];
        if(types.includes(component['type'])){
            switch (component['type']) {
                case 'columns':
                    for(let i = 0;i<component['columns'].length;i++){
                        filter(component['columns'][i]['components']);
                    }

                    break;
                case 'table':
                    for(let i = 0;i<component['rows'].length;i++){
                        for(let r = 0;r<component['rows'][i].length;r++){
                            filter(component['rows'][i][r]['components']);
                        }
                    }

                    break;
                default:
                filtre(component['components']);

                    break;
            }
        }else{
            return {'type':component['type'],key:component['key'],label:component['label'],values:component['data'] || component['values']};
        }
    }

}

exports.getFields = function(req,res){
    let query = {'form': req.params.form_id};
    Fields.findOne(query,function(err, fields){
        if(err) {
            return res.status(400).send(err);
        }
        if (req.query.hasOwnProperty('rsubmit') && fields.components[fields.components.length - 1].key == "submit") {
            fields.components.splice(fields.components.length - 1, 1);
        }
        res.status(200).json(fields)
    })
}


exports.getForm = function(req,res, next){
    let query = {'form' : req.params.form_id};
    Fields.findOne(query).populate('form').exec(function(err,field){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(field)
    })
}


exports.submit = function(req,res){
    let data = req.body;
    console.log(data)
    res.status(200).json(data)
}