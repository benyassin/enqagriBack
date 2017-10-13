var mongoose = require('mongoose');
var Fields = require('./fields')
var Schema =  mongoose.Schema

var FormSchema = new Schema({

    name: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    geometry: {
        lowercase: true,
        type: String,
        enum : ['polygone','polyline','point','none']
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
FormSchema.post('remove',function(form){
    Fields.remove({form: form.id_fields}).exec();
    next();
})
FormSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });

FormSchema.pre('update', function(next) {
    this.options.runValidators = true;
    next();
  });
module.exports = mongoose.model('Form',FormSchema);
