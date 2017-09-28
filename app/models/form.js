var mongoose = require('mongoose');
var Schema =  mongoose.Schema

var FormSchema = new Schema({

    name: {
        type: String,
        lowercase: true,
        required: true
    },
    geometry: {
        lowercase: true,
        type: String,
        enum : ['polygone','polyline','point','none']
    },
    theme: {
        type: String,
        enum : ['rna','annuelle','modulaire']
    },
    statut: {
        type: Boolean,
        default: true
    },
    id_createur: {
        type : Schema.Types.ObjectId,
        ref: 'User'
    },
    id_modifieur: {
        type: String
    },
    perimetre: {
        region:{
            type:Number
        },
        province: {
            type : Number
        },
        commune:{
            type:Number
        }
    },
    date_debut: {
        type: Date,
        required: true
    },
    date_fin: {
        type: Date,
        required: true
    },
    blocs : [{
        type : Schema.Types.ObjectId,
        ref: 'Bloc'
    }],
    fields :[{
        type: Schema.Types.ObjectId,
        ref: 'Fields'
    }],
    id_fields :[{
        type:String
    }]

}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Form',FormSchema);