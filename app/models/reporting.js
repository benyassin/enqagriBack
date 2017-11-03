var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var ReportingSchema = new Schema({
    exploitation : {type:Number,default:0},
    polygone : {type:Number,default:0},
    polyline : {type:Number,default:0},
    point : {type:Number,default:0},
    parcelle : {type:Number,default:0},
    superficier: {type:Number,default:0},
},{
    timestamps:true
});


module.exports = mongoose.model('Reporting',ReportingSchema);