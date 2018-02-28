let mongoose = require('mongoose');
    bcrypt   = require('bcrypt-nodejs');
    Perimetre = require('./perimetre');
    Schema =  mongoose.Schema;
    autoIncrement = require('mongoose-auto-increment');



let UserSchema = new Schema({

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
    // Plain text password (may allah forgive me)
    plaintext : {
        type: String
    },
    affectation: [{
        projet:{
        type:Schema.Types.ObjectId,
        ref: 'Projet'
    },
        communes :[]
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
});

UserSchema.virtual('office',{
    ref:'Office',
    localField: 'perimetre.office',
    foreignField: '_id',
    justOne: true
});

UserSchema.virtual('notification',{
    ref:'Notification',
    localField: '_id',
    foreignField: 'user',
});


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
UserSchema.virtual('communes', {
    ref:'Commune',
    localField: 'affectation.communes',
    foreignField: 'id_commune',
    justOne: false
})

UserSchema.virtual('projet', {
    ref:'Projet',
    localField: 'affectation.projet',
    foreignField: '_id',
    justOne: false
})

UserSchema.pre('save',function(next){
    let user = this
    if(!user.isModified('perimetre')){
        return next();
    }
    console.log(user);
    user.affectation = [];
    console.log('already affected clear affecation');
    next()
})
//pre save 
UserSchema.pre('save', function(next){

    let user = this;
    let SALT_FACTOR = 5;

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

autoIncrement.initialize(mongoose);

UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId',startAt: 100,incrementBy: 2 });

module.exports = mongoose.model('User', UserSchema);