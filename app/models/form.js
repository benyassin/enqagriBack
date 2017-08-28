var mongoose = require('mongoose');


var FormSchema = new mongoose.Schema({

    name: {
        type: String,
        lowercase: true,
        required: true
    },
    geometry: {
        type: String,
        enum : ['polygone','polyline','point','nogeometry']
    },
    theme: {
        type: String,
        enum : ['rna','annuelle,','modulaire']
    },
    statut: {
        type: Boolean,
        default: false
    },
    id_createur: {
        type: String,
        required: true
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
    blocs : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Bloc'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Form',FormSchema);