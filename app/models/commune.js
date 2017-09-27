let mongoose = require('mongoose');

let Schema =  mongoose.Schema;

let CommuneSchema = new Schema({
    name : String,
    id_commune : Number,
    id_region : Number,
    id_province: Number,
    geometry: { type: {
        type: String },
        coordinates: [Number] }
},{ toJSON: { virtuals: true },
    collection: 'commune'
})


module.exports = mongoose.model('Commune',CommuneSchema);