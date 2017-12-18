var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema =  mongoose.Schema

var UserSchema = new Schema({

    login: {
        type: String,
        lowercase:true,
        unique: true,
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },

    affectation: [{
        projet:{
        type:Schema.Types.ObjectId,
        ref: 'Region'
    },
        commune :[]
    }],
    nom : String,
    prenom : String,
    telephone : String,

    role: {
        type: String,
        enum: ['admin', 'superviseurP', 'superviseurR','agent','controleur'],
        default: 'admin'
    },
    perimetre : {
        region : {
            type:Number,
        },
        province : {
            type:Number
        },
        commune : {
            type:Number
        },
        dpa : {
            type:String
        },
        office: {
            type:String
        },
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});


UserSchema.virtual('dpa',{
    ref:'Dpa',
    localField: 'perimetre.dpa',
    foreignField: '_id',
    justOne: true
})

UserSchema.virtual('office',{
    ref:'Office',
    localField: 'perimetre.office',
    foreignField: '_id',
    justOne: true
})

UserSchema.virtual('region',{
    ref:'Region',
    localField: 'perimetre.region',
    foreignField: 'id_region',
    justOne: true
})

UserSchema.virtual('province',{
    ref:'Province',
    localField: 'perimetre.province',
    foreignField: 'id_province',
    justOne: true
})

UserSchema.virtual('commune',{
    ref:'Commune',
    localField: 'perimetre.commune',
    foreignField: 'id_province',
    justOne: true
})


UserSchema.pre('save', function(next){
        var user = this
        if(!user.isModified('perimetre.dpa') && !user.isModified('perimetre.office')){
            return next();
        }
        if(user.perimetre.dpa == ""){user.perimetre.dpa = null} 
        if(user.perimetre.office == ""){ user.perimetre.office = null}
        
        console.log(user)
        next();
});

//pre save 
UserSchema.pre('save', function(next){

    var user = this;
    var SALT_FACTOR = 5;

    if(!user.isModified('password')){
        return next();
    }

    bcrypt.genSalt(SALT_FACTOR, function(err, salt){

        if(err){
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, function(err, hash){

            if(err){
                return next(err);
            }

            user.password = hash;
            next();

        });

    });

});

UserSchema.methods.comparePassword = function(passwordAttempt, cb){
        
            bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
        
                if(err){
                    return cb(err);
                } else {
                    cb(null, isMatch);
                }
            });
        
        }
            
module.exports = mongoose.model('User', UserSchema);