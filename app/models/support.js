let mongoose = require('mongoose');

let Schema =  mongoose.Schema;


let SupportSchema = new Schema({
    cid : {
        type : Schema.Types.ObjectId,
        ref: 'Collection',
        index: true
    },
    properties : Object,
    geometry: mongoose.Schema.Types.GeoJSON,
},
    {
    toJSON: { virtuals: true },
    collection: 'supports'
    }
);

SupportSchema.index({_id:1,cid:1});
module.exports = mongoose.model('Support',SupportSchema);
