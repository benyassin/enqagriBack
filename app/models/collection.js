let mongoose = require('mongoose');

let Schema =  mongoose.Schema;


let CollectionSchema = new Schema({
    name:String,
    type:String
});


module.exports = mongoose.model('Collection',CollectionSchema);

