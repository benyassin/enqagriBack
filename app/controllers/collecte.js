const Collecte = require('../models/collecte');
const mongoose = require('mongoose');
const qs = require('querystring');
const excel = require('../helpers/node-excel-export');
const ObjectId = mongoose.Types.ObjectId;
const request = require('request');
const _ = require('underscore');

const remoteURL = "http://174.138.3.115/";

// const fs = require('fs');
const styles = {
    headerDark: {
        fill: {

        },
        font: {
        }
    },
};

exports.storeCollecte = function(req,res){
    let user = req.user._id;
    let data = req.body;
    if(data.projet === undefined || data.collecte === undefined){
        return res.status(500).json({error:true,message:'Erreur de synchonisation'})
    }
    Collecte.findOne({numero:data.numero,agent:user,'collecte.0.data.0.date_creation':data.collecte[0].data[0].date_creation}).exec((err,collecte)=>{
        if(err){
          return res.status(500).json("err")
        }
        if(collecte === null){
            data.agent = user;
            data.validation = ['new','null','null','null','null'];
            for(let i = 0;i < data.collecte.length;i++){
                data.collecte[i].data = _.uniq(data.collecte[i].data,function(p){ return p.numero; })
            }
            Collecte.create(data,function(err,collecte){
                if(err){
                    return res.status(500).json(err)
                }
                res.status(200).json({error:false,_id:collecte._id,'id_collecte':collecte.id_collecte})
            })
        }else{
            return res.status(500).json({error:true,message:'Already Exist'})
        }
    })


};

// exports.aggregate = function(req,res,next){
//     Collecte.aggregate([
//         {$match:{}},
//       { $project:{"collecte":{"$size":'$collecte'}}},
//       { $group:{"_id":null,"nbrparcelle":{"$sum":"$collecte"}}}
//       ]).exec(function(err,results) {
//         if(err){
//             return res.status(400).json(err)
//         }
//         res.status(200).json(results)
//       })
// }

exports.updateCollecte = function(req,res){
    Collecte.findById(req.body.id).exec(function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }

        if(collecte != null){
        collecte.exploitation = req.body.exploitation;
        collecte.collecte = req.body.collecte;

        collecte.save().then(function(err){
            if(err){
                return res.status(200).json(err)
            }
            console.log(savedoc);
            res.status(200).json(savedoc)

        });
        console.log(req.body);
        }
    })
};

exports.aggregate = function(req,res){
    Collecte.aggregate([
        {$match: {}},
        {$unwind: "$collecte"},
        // {$group:{_id:{"year":{"$year":"$createdAt"},
        // "month":{"$month":"$createdAt"},
        // "day":{"$dayOfMonth":"$createdAt"}}}},
      { $group:{"_id":"$collecte.type","total":{"$sum": 1}}}
      ]).exec(function(err,results) {
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(results)
      })
}

exports.getCollectes = function(req, res){
    if(!req.params.id_collecte){
    Collecte.find({},'projet agent createdAt')
    .populate({path:'projet',select:'name theme validation'})
    .populate('agent')
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
    }else{
        let remove;
        if(req.query.geometry === 'false'){
            remove = '-collecte.data.gjson'
        }
        Collecte.findOne({'_id':req.params.id_collecte},remove)
        .populate({path:'projet',select:'name theme validation cid'})
        .populate('agent')
        .populate('collecte.data.id_support')
        .populate({path:'_region _province _commune',select:'-geometry'})
        .exec(function(err,collecte){
            if(err){
                return res.status(500).json(err)
            }
            let listsupport = [];

            if(collecte.projet.cid != null && collecte.projet.cid !== undefined && req.query.geometry !== 'false'){

            collecte.collecte.forEach(c =>{

                c.data.forEach(element => {
                    if(!listsupport.includes(element.id_support._id)){
                        listsupport.push({'collecte.data.id_support':element.id_support._id});
                    }

                });

            });


            Collecte.find({'projet':collecte.projet}).or(listsupport).exec(function(err,voisin){
                if(err){
                    return res.status(500).json(err)
                }
                let result = [];
                console.log(voisin)
                voisin.forEach(element =>{
                    if(element._id.toString() !== collecte._id.toString()) {
                        element.collecte.forEach(c => {
                            c.data.forEach(p => {
                                result.push({'gjson':p.gjson,'id_collecte':element.id_collecte,'numero':p.numero})
                            })
                        })
                    }
                });

                res.status(200).json({'collecte':collecte,'voisin':result})
            })
            }else{
                res.status(200).json({'collecte':collecte,'voisin':[]})
            }
        })

    }
};


exports.getCollecteByProjet = function (req,res, next){
    id_projet = req.params.id_projet;
    qs.parse(req.query);
    let remove = '-collecte.data.gjson';

    let query = {
        'projet' : req.params.id_projet,
    };
    if(req.query.region != 0){
        query.region = req.query.region
    }
    if(req.query.province != 0){
        query.province = req.query.province
        remove = ''
    }
    if(req.query.commune != 0){
        query.commune = req.query.commune;
    }
    if(req.query.niveau != -1 && req.query.status != 'all'){
    query['validation.' + parseInt(req.query.niveau)] = req.query.status
    }
    if(req.user.role == 'agent'){
        query.agent = req.user._id
    }

    console.log(query);
    Collecte.find(query,remove)
    .populate('agent')
    .populate({path:'_commune',select:'-geometry'})
    .populate('collecte.data.id_support')
    .populate({path:'agent', populate: { path: 'region province commune',select:'name'}})
        .sort({createdAt: 'desc'})
    .lean()
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        // res.status(200).json(collectes)
        if(collectes.length > 0){
            if(collectes[0].geo === false){
                return res.status(200).json({collectes:collectes,order:[]})
            }
        let order = Object.keys(collectes[0].collecte[0].data[0].support);
        // collectes.push({order:order});
        res.status(200).json({collectes:collectes,order:order})
        }else{
            res.status(200).json({collectes:collectes,order:[]})
        }

    })
}

exports.getAgentCollectes = function(req,res){
    Collecte.find({agent:req.user._id}).lean().exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collectes)
    })
};
exports.exportData = function(req,res){
    let keys = Object.keys(req.query);
    console.log(req.query);
    let niveau = 0;
    if(keys.includes('niveau')){
        niveau = req.query.niveau
    }
    let status = req.query.status;
    let query = Object.assign({},req.query);
    if(status === 'reject' ){
        query['$nor'] = [{"validation.0":"new"},{["validation."+niveau]:"valid"}]
    }
    if(niveau !== -1 && status !== 'all' && status !== 'reject'){
        query['validation.' + parseInt(niveau)] = status
    }

    let identificationSpec = {};
    let forms = [];
    delete query.status;
    delete query.niveau;
    Collecte.find(query,'-collecte.data.gjson')
        .populate('agent')
        .lean()
        .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        if(collectes.length === 0){
            return res.status(200).json({})
        }
        let identification = [];
        let parcelle = [];
        collectes.forEach(collecte =>{
            let data = {
                id_collecte:collecte._id,
                numero_collecte:collecte.id_collecte+'-'+collecte.numero,
                region:collecte.region,
                province:collecte.province,
                commune:collecte.commune,
                agent:collecte.agent.userId
            };
            if(collecte.exploitation && collecte.exploitation.formdata !== undefined){
                let idata = collecte.exploitation.formdata.data;
                Object.keys(idata).forEach(key =>{
                    // truekeys(p.formdata.data)
                    if(typeof idata[key] === 'object' && idata[key] !== null){
                        idata[key] = truekeys(idata,key)
                    }
                });
                idata.submit = undefined;
                identification.push(Object.assign(data,collecte.exploitation.formdata.data))
            }else{
                identification.push(data)
            }

            for(let i = 0;i < collecte.collecte.length;i++){

                let index = forms.map((el) => el.form).indexOf(collecte.collecte[i].form);
                if(index === -1){
                    forms.push({'name':collecte.collecte[i].formname,'form':collecte.collecte[i].form,'specification':{},data:[]});
                    index = forms.length-1
                }
                collecte.collecte[i].data.forEach(p =>{
                    let pdata = {
                        collecte:collecte._id,
                        numero_collecte:collecte.id_collecte+'-'+collecte.numero,
                        numero:p.numero,
                        superficie:p.superficie,
                        date_creation:p.date_creation,
                    };
                    if(typeof p.formdata !== 'object'){
                        p.formdata = JSON.parse(p.formdata)
                    }
                    Object.keys(p.formdata.data).forEach(key => {
                        if(forms[index].specification[key] === undefined && key !== 'submit'){
                            forms[index].specification[key] = {displayName: key,width: 60,headerStyle: styles.headerDark}
                        }
                        if(typeof p.formdata.data[key] === 'object' && p.formdata.data[key] !== null){
                            p.formdata.data[key] = truekeys(p.formdata.data,key)
                        }
                    });
                        p.formdata.data.submit = undefined;

                    if(p.support !== -2){
                            forms[index].data.push(Object.assign(pdata,p.support,p.formdata.data))
                    }else{
                            forms[forms.length-1].data.push(Object.assign(pdata,p.formdata.data))
                    }

                })


            }


        });
        if(identification.length > 0){
        Object.keys(identification[0]).forEach(key =>{
            if(key !== 'submit'){
            identificationSpec[key] = {displayName: key,width: 60,headerStyle: styles.headerDark}
            }
        });
        forms.forEach(f =>{
            results = {};
            Object.keys(f.data[0]).forEach(key =>{
                if(key !== 'submit' && f.specification[key] === undefined){
                    results[key] = {displayName: key,width: 60,headerStyle: styles.headerDark}
                }
            });
            f.specification = Object.assign(results,f.specification)
        });
        // Object.keys(parcelle[0]).forEach(key =>{
        //     if(key !== 'submit'){
        //         parcelleSpec[key] = {displayName: key,width: 60,headerStyle: styles.headerDark}
        //     }
        //
        // });

            forms.unshift({'name':'Identification','specification':identificationSpec,'data':identification})

            const report = excel.buildExport(forms);

            res.writeHead(200, {
                'Content-Type':'application/vnd.openxmlformats',
                'Content-disposition': 'attachment;filename=' + 'Report.xlsx',
            });
            return res.end(new Buffer(report, 'binary'));
        }else{
            res.status(200).send({test:'test'})
        }

    });
    function truekeys(data,key){
        let t = [];
        Object.keys(data[key]).forEach(k =>{
            if(data[key][k] === true){
                t.push(k)
            }
        });
        return JSON.stringify(t)
    }
};

exports.exportGeo = function(req,res) {
    let keys = Object.keys(req.query);
    let niveau = 0;
    if(keys.includes('niveau')){
        niveau = req.query.niveau
    }
    let status = req.query.status;
    let query = Object.assign({},req.query);
    if(status === 'reject' ){
        query['$nor'] = [{"validation.0":"new"},{["validation."+niveau]:"valid"}]
    }
    if(niveau !== -1 && status !== 'all' && status !== 'reject'){
        query['validation.' + parseInt(niveau)] = status
    }
    delete query.status;
    delete query.niveau;
    console.log(query)
    Collecte.find(query)
        .populate('agent')
        .lean()
        .exec(function (err, collectes) {
            if (err) {
                return res.status(500).json(err)
            }
            if (collectes.length === 0) {
                return res.status(200).json({})
            }
            let parcelles = [];
            collectes.forEach(collecte => {
                // let data = {
                //     id_collecte: collecte._id,
                //     numero_collecte: collecte.id_collecte+'-'+collecte.numero,
                //     region: collecte.region,
                //     province: collecte.province,
                //     commune: collecte.commune,
                //     agent: collecte.agent.userId
                // };



                collecte.collecte.forEach(form => {
                    form.data.forEach(p => {
                        let pdata = {
                            id_collecte: collecte._id,
                            numero_collecte: collecte.id_collecte+'-'+collecte.numero,
                            region: collecte.region,
                            province: collecte.province,
                            commune: collecte.commune,
                            agent: collecte.agent.userId,
                            numero: p.numero,
                            superficie: p.superficie,
                            data_creation: p.date_creation,
                        };
                        if(collecte.exploitation && collecte.exploitation.formdata !== undefined){
                            let idata = collecte.exploitation.formdata.data;
                            Object.keys(idata).forEach(key =>{
                                // truekeys(p.formdata.data)
                                if(typeof idata[key] === 'object' && idata[key] !== null){
                                    idata[key] = _truekeys(idata,key)
                                }
                            });
                            idata.submit = undefined;
                            Object.assign(pdata,collecte.exploitation.formdata.data)
                        }
                        Object.keys(p.formdata.data).forEach(key => {
                            if (typeof p.formdata.data[key] === 'object' && p.formdata.data[key] !== null) {
                                truekeys = [];
                                Object.keys(p.formdata.data[key]).forEach(k => {
                                    if (p.formdata.data[key][k] === true) {
                                        truekeys.push(k)
                                    }
                                });
                                p.formdata.data[key] = JSON.stringify(truekeys)
                            }
                        });
                        if(p.gjson.hasOwnProperty('geometry')){
                            p.gjson = p.gjson.geometry
                        }

                        if (p.support !== -2) {
                            parcelles.push({type:'Feature',properties:Object.assign(pdata,p.support,p.formdata.data),geometry:p.gjson});
                        }else {
                            parcelles.push({type:'Feature',properties:Object.assign(pdata,p.formdata.data),geometry:p.gjson});
                        }

                        })
                })


            });
            function _truekeys(data,key){
                let t = [];
                Object.keys(data[key]).forEach(k =>{
                    if(data[key][k] === true){
                        t.push(k)
                    }
                });
                return JSON.stringify(t)
            }
            // return res.json({"type":"FeatureCollection","features":parcelles})
            return res.end(new Buffer(JSON.stringify({"type":"FeatureCollection","features":parcelles}), 'binary'));
        });



};

exports.getCollecteEnTraitement = function(req,res,next){
    id_projet = req.params.id_projet;

    qs.parse(req.query);
    let remove = '-collecte.data.gjson';

    let query = {
        'projet' : req.params.id_projet,
    };
    if(req.query.region != 0 ){
        query.region = req.query.region
    }
    if(req.query.province != 0){
        query.province = req.query.province
        remove = ''
    }
    if(req.query.commune != 0){
        query.commune = req.query.commune
    }
    let test = {}
    test['validation.' +  req.query.index] = 'valid';

    console.log({'validation.0':'new'},test);
    Collecte.find(query,remove).nor([{'validation.0':'new'},test])
    .populate('agent')
        .populate({path:'_commune',select:'-geometry'})
        .populate({path:'agent', populate: { path: 'region province commune',select:'name'}})
        .sort({createdAt: 'desc'})
        .lean()
    .exec(function(err,collectes){
        if(err){
            return res.status(500).json(err)
        }
        if(collectes.length > 0){
            if(collectes[0].geo === false){
                return res.status(200).json({collectes:collectes,order:[]})
            }
            let order = Object.keys(collectes[0].collecte[0].data[0].support);
            // collectes.push({order:order});
            res.status(200).json({collectes:collectes,order:order})
        }else{
            res.status(200).json({collectes:collectes,order:[]})
        }
    })

}

exports.validate = function(req,res,next){
    let data = req.body;
    let query = {};
    if(req.body.rmessage){
        query.rmessage = req.body.rmessage
    }
    switch(data.action){
        case 'valid':
        query['validation.' + parseInt(data.niveau+1)] = 'new';
        query['validation.' + parseInt(data.niveau)] = data.action;
        query.rmessage = null
        break;
        case 'reject':
        query['validation.' + parseInt(data.niveau)] = 'null';
        query['validation.' + parseInt(data.niveau-1)] = data.action;
        break
    }
    console.log(query)
    Collecte.update({_id:data.id},{ $set: query},function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collecte)
    })
};

exports.getVoisin = function(req,res){

    Collecte.find({'projet':req.query.pid,'collecte.data.id_support':mongoose.Types.ObjectId(req.id.sid)},function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        let result = [];
        collecte.forEach(element =>{
            if(element._id !== cid) {
                element.collecte.forEach(c => {
                    c.data.forEach(p => {
                        result.push(p.gjson)
                    })
                })
            }
        });
        res.status(200).json(result)
    })
};

exports.getMapData = function(req,res){
    console.log(req.query)
};

exports.Collectes = function(req,res){
    let skip = 0;
    if(parseInt(req.query._page) > 1){
        console.log('test');
        skip = (req.query._page-1)*req.query._limit
    }
    console.log(skip);

    Collecte.find({projet:req.params.id_projet},'projet agent createdAt numero id_collecte',{ skip: skip, limit: parseInt(req.query._limit) })
        .populate({path:'projet',select:'name theme validation'})
        .populate('agent','nom prenom')
        .exec(function(err,collectes){
            if(err){
                return res.status(500).json(err)
            }
            res.set("Access-Control-Expose-Headers", "x-total-count");
            res.set("X-Total-Count",5000).status(200).json(collectes);})
};
exports.Collectes2 = function(req,res) {
    let def = ['_page','_limit','_sort','_order','niveau','status','date'];
    let query = {projet:req.params.id_projet};
    if(!req.query._page){
        req.query._page = 1;
        req.query._limit = 3000
    }
    let options = {
        select:   'projet agent createdAt numero id_collecte commune region province',
        populate: [
            // {path:'projet',select:'name theme validation'},
            {path:'agent',select:'nom prenom'},
            {path:'_commune',select:'-geometry'}
            ],
        lean:     false,
        page:   parseInt(req.query._page),
        limit:    parseInt(req.query._limit)
    };
    if(req.user.role === 'agent'){
        // req.query.niveau = 0
        query['agent'] = req.user._id
    }
    if(req.query.status === 'reject' ){
            query['$nor'] = [{"validation.0":"new"},{["validation."+req.query.niveau]:"valid"}]
    }
    if(req.query.niveau !== -1 && req.query.status !== 'all' && req.query.status !== 'reject'){
        query['validation.' + parseInt(req.query.niveau)] = req.query.status
    }

    if(req.query.date){
        let date = req.query.date.split(/(\s+)/);
        console.log(date)
        query.createdAt = {'$gte': new Date(date[0].concat("T00:00:00")),'$lte': new Date(date[4].concat("T23:00:00"))}
    }

    if(req.query['_sort']){
        options.sort = { [req.query._sort]:req.query._order.toLowerCase()}
    }else{
       options.sort = { createdAt: 'desc' }
    }

    if(req.query.commune){
        options.select = options.select.concat('exploitation collecte')
    }



    for (let key in req.query) {
        if (!def.includes(key)) {
            if (key.indexOf('_like') >= 0) {
                let test = key.replace('_like', '');
                query[test] = req.query[key]
            }else {
                query[key] = req.query[key]
            }
        }
    }

    console.log(query)


    Collecte.paginate(query,options,function(err,collectes){
            if(err){
                return res.status(500).json(err)
            }
            res.status(200).json(collectes);})
};

function EpochToDate(epoch) {
    if (epoch < 10000000000)
        epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone
    return new Date(epoch);
}

exports.delete = function(req,res){
    let id = req.params.id_collecte;


    Collecte.remove({_id:id},function(err,collecte){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collecte)
    })
};

exports.databaseCheck = function(req,res){
    request.get(remoteURL+'double.json',function (error,response,body) {
        console.log(body)
        let data=JSON.parse(body);
        let array = [];
        data.forEach(collecte =>{
            array.push(ObjectId(collecte.ID))
        });
        Collecte.remove({_id: {$in: array}}).exec(function(err,removed){
            if(err){
                return res.status(500).json({error:'error deleting collectes'})
            }
            res.status(200).send(removed)
        });
    });
}

exports.databaseInstanceCheck = function(req,res){
    request.get(remoteURL+'instance.json',function (error,response,body) {
        data = JSON.parse(body);
        for (let i = 0; i < data.length; i++) {
            Collecte.findById(data[i].ID).exec(function (err, result) {
                if (err) {
                    console.log(err)
                    return res.status(500).json(err)
                }
                if (result === null) return;
                for (let x = 0; x < result.collecte.length; x++) {
                    result.collecte[x].data = _.uniq(result.collecte[x].data,function(p){ return p.numero; })
                }
                result.save(function (err) {
                    if (err){
                        console.log(err)
                        return res.status(500).json(err);
                    }
                })

            })
        }

        res.status(200).json({JOB:'done'})
    })
}

function checkiInstance(collecte){
    let data = collecte;
    for(let i = 0;i < 30;i++){
       let result = getAllIndexes(data,i);
        if(result.length > 1){
            for(x = 1;x < result.length;x++){
                data.splice(result[x],1)
            }
        }
    }
    return data
}

function getAllIndexes(arr, number) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i].numero === number)
            indexes.push(i);
    return indexes;
}

