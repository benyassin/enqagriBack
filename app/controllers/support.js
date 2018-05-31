let fs = require('fs');
let Support = require('../models/support');
let Collection = require('../models/collection');
let Projet = require('../models/projet');
let perimetre = require('../models/perimetre')
let mongoose = require('mongoose');
const csv = require("csvtojson");


let multer = require('multer');


let storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        let datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

let upload = multer({ //multer settings
    storage: storage
}).single('file');

exports.Upload = function(req,res){
    const attributes = ['id_region','id_province','id_commune','id_echantillon'];
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        let data;

        if(req.file.path.split('.').pop() === 'geojson'){
            data = JSON.parse(fs.readFileSync(req.file.path,'utf8'));
            console.log(data)
            const keys = data.features[0].properties;
            mkeys = [];
            attributes.forEach(attr =>{
                if(typeof keys[attr] === 'undefined') {
                    mkeys.push(attr)
                }
            });
            if(mkeys.length === 0) {
                data.features.forEach(element => {
                    element.cid = mongoose.Types.ObjectId(req.query.id)
                });

                insert(data.features)
            }else {
                return res.status(500).json({error:'missing keys',messages:'missing keys: '+ mkeys.join(',')})
            }

        }else{
            data = fs.readFileSync(req.file.path,'utf8');
            csv({delimiter:[",",";"]})
                .fromString(data)
                .on('end_parsed',(jsonArrObj)=>{
                    const keys = jsonArrObj[0];

                    mkeys = [];
                    attributes.forEach(attr =>{
                        if(typeof keys[attr] === 'undefined') {
                            mkeys.push(attr)
                        }
                    });

                    if(mkeys.length === 0){
                        jsonArrObj.forEach(element  => {
                            element.cid = mongoose.Types.ObjectId(req.query.id)
                        });
                        insert(jsonArrObj)
                    }
                    else {
                        return res.status(500).json({error:'missing keys',messages:'missing keys: '+ mkeys.join(',')})
                    }


                })
        }
        Support.remove({cid:mongoose.Types.ObjectId(req.query.id)},function(err,data){
            if(err){
                return res.status(500).json(err)
            }
        });
        function insert(v){

            Support.collection.insert(v,cb);
            function cb(err,docs){
                if(err){
                    res.json(err)
                }else{
                    res.json({'inserted':docs.insertedCount})
                }
            }
        }
    });
};

exports.GetSupport = function(req,res){
    console.log(req.query);
    Support.find({cid:mongoose.Types.ObjectId(req.query.id)},'-_id -cid').lean().exec(function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        if(data.length == 0){
            return res.status(200).json({support:[],order:[]})
        }
        let order
        if(data[0].hasOwnProperty('properties')){
            order = Object.keys(data[0].properties);
        }else{
            order = Object.keys(data[0])
        }

        res.status(200).json({support:data,order:order})
    })
};

exports.getSupportKeys = function (req,res) {
    Support.findOne({cid:mongoose.Types.ObjectId(req.query.id)},'-_id -cid').lean().exec(function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        if(!data){
            return res.status(200).json([])
        }
        console.log(data)
        console.log(Object.keys(data))
        let order;
        if(data.properties){
            order = Object.keys(data.properties);
            res.status(200).json(order)
        }else{
            res.status(200).json(Object.keys(data))
        }

    })
};

exports.GetSupportByid = function(req,res){

    Support.findbyid(req.query.id).exec(function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(data)
    })
};

exports.getCollection = function(req,res){
    Collection.find({},function (err,collections) {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collections)
    })
};

exports.createCollection = function(req,res){
    console.log(req.body);
    Collection.create(req.body,function(err,collection){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collection)
    })
};

exports.deleteCollection = function(req,res){
    if(!req.params.cid){
        return res.status(500).json({error:'collection id is required'})
    }
    let id = req.params.cid;
    Projet.find({cid:id},'name').exec(function(err,projets){
        if(err){
            return res.status(500).json(err)
        }
        if(projets.length > 0) {
            let pr = [];
            projets.forEach(p => {
                pr.push(p.name)
            });
            return res.status(500).json({error: 'Cette collection est utilisé dans les enquêtes suivantes: ' + pr.join(',')})
        }
        Collection.remove({_id:id},function(err,response){
            if(err){
                return res.status(500).json(err)
            }
            Support.deleteMany({cid:id},function(req,response){
                if(err){
                    return res.status(500).json(err)
                }
                res.status(200).json(response)
            })
        })
    });
}

exports.getSupportByCommune = function(req,res){
    console.log(req.params);
    let id_commune = req.params.id_commune;

    let support = Support.find({'properties.id_commune':parseInt(id_commune),'cid':req.query.cid})
        .select('properties.id_echantillon geometry type')
        .lean()
        .exec();

    let commune = Perimetre.Commune.findOne({'id_commune':id_commune})
        .lean()
        .select('geometry')
        .exec();

    Promise.all([support,commune]).then((results) => {
        res.status(200).json({commune:results[1].geometry,support:results[0]})
    },(error) =>{
        res.status(500).json(error)
    })
}