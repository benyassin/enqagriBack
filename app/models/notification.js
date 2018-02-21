let mongoose = require('mongoose');

let Schema =  mongoose.Schema;


let NotificationSchema = new Schema({
        user : {
            type : Schema.Types.ObjectId,
            ref: 'User'
        },
        type : {
            type:String
        },
        projet:{
            type:String
        },
        vue: {
            type: Boolean,
            default: false,
        }
    },{collection: 'notification'}
);


module.exports = mongoose.model('Notification',NotificationSchema);
