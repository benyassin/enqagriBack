var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var ProvinceSchema = new Schema({
    name : String,
    id_region : Number,
    id_province: Number,
    geometry: { type: { 
        type: String }, 
        coordinates: [Number] }
},{ toJSON: { virtuals: true },
    collection: 'province'
})


module.exports = mongoose.model('Province',ProvinceSchema);