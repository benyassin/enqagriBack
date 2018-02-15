let fs = require('fs');
let Support = require('../models/support');
let Collection = require('../models/collection');
let mongoose = require('mongoose');

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
        console.log(req.file);
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        let data = JSON.parse(fs.readFileSync(req.file.path,'utf8'));
        data.features.forEach(element  => {
            element.cid = mongoose.Types.ObjectId(req.query.id)
        });
        Support.remove({cid:mongoose.Types.ObjectId(req.query.id)},function(err,data){
            if(err){
                return res.status(500).json(err)
            }
            console.log('removed elements',data)
        })
        Support.collection.insert(data.features,test);
        function test(err,docs){
            if(err){
                res.json(err)
            }else{
            res.json({'inserted':docs.insertedCount})
            }
        }
    });
};

exports.GetSupport = function(req,res){
    console.log(req.query);
    Support.find({cid:mongoose.Types.ObjectId(req.query.id)},function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        let order = Object.keys(data[0].properties);
        res.status(200).json({support:data,order:order})
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