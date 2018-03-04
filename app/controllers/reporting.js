let mongoose =require("mongoose");

let Reporting = require('../models/reporting');
let Collecte = require('../models/collecte');
let qs = require('querystring');


exports.getReports = function(req,res,next){
    let test = {};
    Reporting.find({}).exec(function(err,data){
        if(err){
            return res.status(500).json(err)
        }
        test.daily = data
        Reporting.aggregate(
            // {$project: {"polygone": 1,"polyline":1,"point":1}},
            {$group:{"_id":null,point:{$sum:"$point"},
            polygone:{$sum:"$polygone"},
            polyline:{$sum:"$polyline"},
            exploitation:{$sum:"$exploitation"},
            superficie:{$sum:"$superficie"}
        }}
        ).exec(function(err,results) {
            if(err){
                return res.status(500).json(err)
            }
            test.total = results[0]
            test.total.parcelle = results[0].polygone + results[0].polyline + results[0].point
            res.status(200).json(test)
        })
    });

};

exports.aggregate = function(req,res){

    qs.parse(req.query)
    let query = {
        'projet' : req.params.id_projet,
    };
    if(parseInt(req.query.region) !== 0 ){
        query.region = req.query.region
    }
    if(parseInt(req.query.province) !== 0){
        query.province = req.query.province
    }
    if(req.user.role == 'agent'){
        query.agent = req.user._id
    }

    // if(req.user.role == 'admin'){
    //     query.agent = req.user._id
    // }
    let p0 = Collecte.count(query).exec();
    let p3 = Collecte.count(query).nor([{'validation.0':'new'},{['validation.' + req.query.pmax]: 'valid'}]).exec();

    if(parseInt(req.query.niveau) != -1){
        query['validation.' + req.query.niveau] = 'new'
    }
    let p1 =  Collecte.count(query).exec();
    query['validation.'+req.query.niveau] = 'reject';
    let p6 = Collecte.count(query).exec();


    query['validation.'+ req.query.niveau] = 'valid';
    if(req.user.role != 'controleur'){
        delete query['validation.'+ req.query.niveau];
        query['validation.'+ req.query.pmax] = 'valid';
    }
    console.log(query)
    let p2 = Collecte.count(query).exec();

    let d = new Date();
    d.setDate(d.getDate()-6);


    let p4 = Collecte.aggregate({
        $match: {
            ['validation.'+ req.query.pmax]:'valid',
            'projet':mongoose.Types.ObjectId(req.params.id_projet),
            createdAt: {
                $gte: new Date(d)
            }
        }
    }, {
        $group: {
            _id: {
                "date":  { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }},
            },
            count:{$sum: 1}
        }

    }).exec(function(err,data){
        if (err) {
            console.log('Error Fetching model');
            console.log(err);
        }
    })
    let p5 = Collecte.aggregate({
        $match: {
            'projet':mongoose.Types.ObjectId(req.params.id_projet),
            createdAt: {
                $gte: new Date(d)
            }
        }

    }, {
        $group: {
            _id: {
                "date":  { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }},
            },
            count:{$sum: 1}

        }

    }).exec(function(err,data){
        if (err) {
            console.log('Error Fetching model');
            console.log(err);
        }
    })



    Promise.all([p0,p1,p2,p3,p4,p5,p6]).then(function(values) {
        res.status(200).json({'total':values[0],'wait':values[1],'valid':values[2],'entraitment':values[3],'validePerDay':values[4],'totalPerDay':values[5],'refus':values[6]})
    },reason => {
        console.log(res.status(500).json(reason))
    });


};

exports.aggregatee = function(req,res,next){
    Collecte.aggregate([
        {$match:{}},
      { $project:{"collecte":{"$size":'$collecte'}}},
      { $group:{"_id":null,"nbrparcelle":{"$sum":"$collecte"}}}
      ]).exec(function(err,results) {
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(results)
      })
}