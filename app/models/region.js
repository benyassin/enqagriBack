var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var RegionSchema = new Schema({
    name : String,
    id_region : Number,
    geometry: { type: { 
        type: String }, 
        coordinates: [Number] }
    
},{ toJSON: { virtuals: true },
    collection: 'region'
});




module.exports = mongoose.model('Region',RegionSchema);