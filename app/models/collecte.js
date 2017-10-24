var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema =  mongoose.Schema

var CollecteSchema = new Schema({
    id_projet : {
        type : Schema.Types.ObjectId,
        ref: 'Projet'
    },
    exploitation : {
        id_exploitation: String,
        superficieTotale:Number,
        form: String,
        data: Object
    },
    blocs:[{
        id_exploitation: String,
        number: Number,
        Shape:String,
        gjson:{
            type:mongoose.Schema.Types.GeoJSON
        },
        superficie: Number,
        date_creation : Date
    }],
    collecte:[{
        type: {type:String},
        form: String,
        parcelles: [{
            id_exploitation:String,
            numero_bloc: Number,
            numero : Number,
            Shape:String,
            gjson:mongoose.Schema.Types.GeoJSON,
            superficie: Number,
            date_creation: Date,
            data:Object
        }]
    }],
});


module.exports = mongoose.model('Collecte',CollecteSchema);;