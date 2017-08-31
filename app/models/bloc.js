var mongoose = require('mongoose');


var BlocSchema = new mongoose.Schema({
    name : {
        type: String,
        lowercase: true,
        required: true
    },
    fields : {
        type: JSON,
        required: true
    },
    theme: {
        type: String,
        enum : ['rna','annuelle,','modulaire']
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
            type: Number 
        }
    },
    id_createur : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{
    timestamps: true
});


module.exports = mongoose.model('Bloc',BlocSchema);