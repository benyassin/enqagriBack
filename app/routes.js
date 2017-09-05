var AuthenticationController = require('./controllers/authentication'),
    UserController = require('./controllers/users'),
    BlocController = require('./controllers/bloc'),
    FormController = require('./controllers/form'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();
        blocRoutes = express.Router();
        formRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    // User routes
    apiRoutes.use('/users', userRoutes);

    userRoutes.get('/', requireAuth, UserController.getUsers);
    userRoutes.get('/:user_id',UserController.getUser)
    userRoutes.post('/',requireAuth,UserController.createUser);
    userRoutes.delete('/:user_id',requireAuth,UserController.deleteUser);


    // Bloc routes
    apiRoutes.use('/blocs', blocRoutes);
    
    //AuthenticationController.roleAuthorization(['editor'])
    blocRoutes.post('/', requireAuth, BlocController.createBloc);
    blocRoutes.get('/', requireAuth, BlocController.getBlocs);
    blocRoutes.delete('/:bloc_id',requireAuth,BlocController.deleteBloc);
    blocRoutes.put('/:bloc_id', requireAuth, BlocController.updateBloc);
  //  blocRoutes.get('/theme', requireAuth, BlocController.getBlocsByTheme);

    //Form routes

    apiRoutes.use('/forms', formRoutes);

    formRoutes.post('/', requireAuth, FormController.createForm);
    formRoutes.get('/',requireAuth, FormController.getForms)
    formRoutes.delete('/:form_id',requireAuth,FormController.deleteForm)

    // Set up routes
    app.use('/api', apiRoutes);

}