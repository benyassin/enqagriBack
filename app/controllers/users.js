var User = require('../models/user');



exports.getUsers = function(req, res,next ) {
   User.find()
   .select('-password')
   .exec(function (err, users){
       if(err){
        return  res.send(err);
       }
       res.json(users)
   })
}

exports.getUser = function (req, res, next) {
    User.findOne({_id : req.params.user_id}, function (err, user){
        if(err){
         return res.sen(err);
        }
        res.json(user)
    })
};

exports.deleteUser = function (req, res) {

    User.remove({_id :req.params.user_id}, function (err, user) {
            res.json(user)
        });

};

exports.createUser = function (req, res,next) {
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var email = req.body.email;
        var password = req.body.password;
        var role = req.body.role;
        var telephone = req.body.telephone;
        var createdBy = req.user._id;
        var perimetre = {region : req.body.region,province: req.body.province,commune: req.body.commune}

    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }

    if(!password){
        return res.status(422).send({error: 'You must enter a password'});
    }
    User.findOne({email: email}, function(err, existingUser) {
        if(err){
            return next(err);
        }

        if(existingUser){
            return res.status(422).send({error: 'That email address is already in use'});
        }

        var user = new User({
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
            role: role,
            telephone: telephone,
            createdBy: createdBy,
            perimetre : perimetre
        });
        user.save(function(err, user){

            if(err){
                return next(err);
            }

            res.status(201).json({
                user: user
            })

        });
});
}