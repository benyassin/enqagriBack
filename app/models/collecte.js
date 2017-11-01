var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema =  mongoose.Schema

var CollecteSchema = new Schema({
    projet : {
        type : Schema.Types.ObjectId,
        ref: 'Projet'
    },
    agent:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    id_exploitation: {
        type: String,
        required:true
    },
    exploitation : {
        superficieTotale:Number,
        form: String,
        formdata: Object
    },
    blocs:[{
        number: Number,
        shape:String,
        gjson:mongoose.Schema.Types.GeoJSON,
        superficie: Number,
        date_creation : Date
    }],
    collecte:[{
        type: {type:String},
        form: String,
        formname: String,
        data: [{
            numero_bloc: Number,
            numero : Number,
            shape:String,
            gjson:mongoose.Schema.Types.GeoJSON,
            superficie: Number,
            date_creation: Date,
            formdata:Object
        }]
    }],
});


module.exports = mongoose.model('Collecte',CollecteSchema);;