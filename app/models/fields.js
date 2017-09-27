var mongoose = require('mongoose');

var Schema =  mongoose.Schema

var FieldsSchema = new Schema({
    json : Object,
    type : String,
    form : {
        type: Schema.Types.ObjectId,
        ref: 'Form'
    },
})


module.exports = mongoose.model('Fields',FieldsSchema);