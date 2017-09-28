var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var FieldsSchema = new Schema({
    json : Object,
    type : String,
    form : String,
})


module.exports = mongoose.model('Fields',FieldsSchema);