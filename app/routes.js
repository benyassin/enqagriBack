var AuthenticationController = require('./controllers/authentication'),
    TodoController = require('./controllers/todos'),
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

    userRoutes.get('/', requireAuth, UserController.getUser);
    userRoutes.post('/create',requireAuth,UserController.createUser);
    userRoutes.delete('/:user_id',requireAuth,UserController.deleteUser);


    // Bloc routes
    apiRoutes.use('/blocs', blocRoutes);

    blocRoutes.post('/', requireAuth, BlocController.createBloc);
    blocRoutes.get('/', requireAuth, BlocController.getBlocs);
    blocRoutes.post('/delete/:bloc_id', requireAuth, BlocController.updateBloc);
    blocRoutes.get('/theme', requireAuth, BlocController.getBlocsByTheme);

    //Form routes

    apiRoutes.use('/forms', formRoutes);

    formRoutes.post('/', requireAuth, FormController.createForm);

    // Set up routes
    app.use('/api', apiRoutes);

}