let mongoose = require('mongoose');

let Schema =  mongoose.Schema;


let SupportSchema = new Schema({
    cid : {
        type : Schema.Types.ObjectId,
        ref: 'Collection'
    },
    properties : Object,
    geometry: mongoose.Schema.Types.GeoJSON,
},{ toJSON: { virtuals: true },
    collection: 'supports'}
);


module.exports = mongoose.model('Support',SupportSchema);
