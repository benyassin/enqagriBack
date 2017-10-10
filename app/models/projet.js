var mongoose = require('mongoose');
var Schema =  mongoose.Schema

var ProjetSchema = new Schema({

    name: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    theme: {
        type: String,
        enum : ['rna','annuelle','modulaire','complementaire']
    },
    statut: {
        type: Boolean,
        default: true
    },
    perimetre: {
        region:[{
            type:Schema.Types.ObjectId,
            ref: 'Region'
        }],
        province: [{
            type:Schema.Types.ObjectId,
            ref: 'Province'
        }],
    },
    forms : [{
        type : Schema.Types.ObjectId,
        ref: 'Form'
    }],

}, {
    timestamps: true,
    versionKey: false
});

ProjetSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });

ProjetSchema.pre('update', function(next) {
    this.options.runValidators = true;
    next();
  });
module.exports = mongoose.model('Projet',ProjetSchema);
