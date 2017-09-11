var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlocSchema = new Schema({
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
        enum : ['annuelle','modulaire','complementaire','none']
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
        type : Schema.Types.ObjectId,
        ref: 'User'
    },
    form : {
        type: Schema.Types.ObjectId,
        ref: 'Form'
    },

},{
    timestamps: true,
    versionKey: false    
});


module.exports = mongoose.model('Bloc',BlocSchema);