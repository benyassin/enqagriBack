let mongoose = require('mongoose');

let Schema =  mongoose.Schema;


let CollectionSchema = new Schema({
    name:String,
    type:String
},{
    toJSON: { virtuals: true },
    toObject:{ virtuals: true },
});



module.exports = mongoose.model('Collection',CollectionSchema);


