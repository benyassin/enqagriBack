let fs = require('fs');
let Support = require('../models/support');
let Collection = require('../models/collection');
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
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        let data

        if(req.file.path.split('.').pop() === 'geojson'){
            data = JSON.parse(fs.readFileSync(req.file.path,'utf8'));
        data.features.forEach(element  => {
            element.cid = mongoose.Types.ObjectId(req.query.id)
        });
         insert(data.features)
        }else{
            data = fs.readFileSync(req.file.path,'utf8')
            csv()
                .fromString(data)
                .on('end_parsed',(jsonArrObj)=>{
                    jsonArrObj.forEach(element  => {
                        element.cid = mongoose.Types.ObjectId(req.query.id)
                    });
                    insert(jsonArrObj)
                })
        }
        Support.remove({cid:mongoose.Types.ObjectId(req.query.id)},function(err,data){
            if(err){
                return res.status(500).json(err)
            }
        });
        console.log('/////////////// DATA ////////////////')
        console.log(data);
        console.log('/////////////// DATA ////////////////')
      function insert(data){
            Support.collection.insert(data,cb);
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
    let id = req.params.cid
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
}