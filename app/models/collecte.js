let mongoose = require('mongoose');
let GeoJSON = require('mongoose-geojson-schema');
let Reporting = require('./reporting');
let _ = require('lodash');
let Schema =  mongoose.Schema;

let CollecteSchema = new Schema({
    projet : {
        type : Schema.Types.ObjectId,
        ref: 'Projet'
    },
    agent:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    numero: Number,
    geo: Boolean,
    lat: String,
    lng: String,
    region: Number,
    province: Number,
    commune: Number,
    superficie: Number,
    validation : [{
        type: String,
        default: ['new','null','null','null','null']
    }],
    rmessage:{
        type:String,
        default:null
    },
    status : {
        type: Number,
        default : 0
    },
    exploitation : {
        form: String,
        formname:String,
        formdata: Object
    },
    blocs:[{
        numero: Number,
        shape:String,
        gjson:mongoose.Schema.Types.GeoJSON,
        superficie: Number,
        date_creation : Date
    }],
    collecte:[{
        type: {
            type:String
        },
        form: String,
        formname: String,
        data: [{
            support : Object,
            id_support:{
                type:Schema.Types.ObjectId,
                ref:'Support'
            },
            numero : Number,
            shape:String,
            gjson:mongoose.Schema.Types.GeoJSON,
            superficie: Number,
            date_creation: Date,
            capture: String,
            formdata:Object
        }]
    }],
},{
    timestamps: true,}
);

CollecteSchema.post("save", function(doc,next){
    self = this;
    parcelle = this.collecte.length;
    count = this.collecte.reduce(function(sums,entry){
        sums[entry.type] = (sums[entry.type] || 0) + 1;
        return sums;
     },{});
    var now = new Date();
    var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    Reporting.findOneAndUpdate({createdAt:{$gte: startOfToday}},{$inc:{exploitation: 1,polygone:count.polygone || 0,polyline:count.polyline || 0,point:count.point || 0,superficie:self.superficie || 0}},{upsert:true},
        function(err,data){
        if(err){
            console.log(err)
            next()
        }
        console.log(data)
        next()
    })
})

CollecteSchema.post("remove", function(doc,next){
    self = this
    parcelle = this.collecte.length
    count = this.collecte.reduce(function(sums,entry){
        sums[entry.type] = (sums[entry.type] || 0) + 1;
        return sums;
     },{});
    let now = new Date();
    let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    Reporting.findOneAndUpdate({createdAt:{$gte: startOfToday}},{$inc:{exploitation: -1,polygone:-count.polygone || 0,polyline:-count.polyline || 0,point:-count.point || 0,parcelle:-parcelle}},{upsert:true},
        function(err,data){
        if(err){
            console.log(err)
            next()
        }
        console.log(data)
        next()
    })
})
module.exports = mongoose.model('Collecte',CollecteSchema);;