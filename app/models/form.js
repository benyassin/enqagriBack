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
        enum : ['polygone','polyline','point']
    },
    theme: {
        type: String,
        enum : ['rna','annuelle','modulaire','complementaire']
    },
    statut: {
        type: Boolean,
        default: true
    },
    id_createur: {
        type : Schema.Types.ObjectId,
        ref: 'User'
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
    id_fields :{
        type:String
    }

}, {
    toJSON: { virtuals: true },
    timestamps: true,
    versionKey: false
});

FormSchema.virtual('fields',{
    ref:'Fields',
    localField: 'id_fields',
    foreignField: 'form',
    justOne: false    
})
module.exports = mongoose.model('Form',FormSchema);
