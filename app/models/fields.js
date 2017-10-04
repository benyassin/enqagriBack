var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var FieldsSchema = new Schema({
    components : Object,
    display : String,
    form : String,
})


module.exports = mongoose.model('Fields',FieldsSchema);