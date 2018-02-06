let fs = require('fs');
let Support = require('../models/support');
let Collection = require('../models/collection');
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
    console.log(req);
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        let data = JSON.parse(fs.readFileSync(req.file.path,'utf8'));
        data.features.forEach(element  => {
            element.cid = req.query.id
        });
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

    Support.find({},function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        console.log(data);
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
    Collection.create(req.params,function(err,collection){
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(collection)
    })
};