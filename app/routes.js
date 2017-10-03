var AuthenticationController = require('./controllers/authentication'),
    UserController = require('./controllers/users'),
    BlocController = require('./controllers/bloc'),
    FormController = require('./controllers/form'),
    FieldsController = require('./controllers/fields'),
    PerimetreController = require('./controllers/perimetre'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport'),
    validate = require('express-validation');
    validation = require('./validation')

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();
        blocRoutes = express.Router();
        formRoutes = express.Router();
        perimetreRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register',validate(validation.user), AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    // User routes
    apiRoutes.use('/users', userRoutes);

    userRoutes.get('/', requireAuth, UserController.getUsers);
   // userRoutes.get('/:user_id',UserController.getUser)
    userRoutes.post('/',requireAuth,UserController.createUser);
    userRoutes.delete('/:user_id',requireAuth,UserController.deleteUser);
    userRoutes.put('/:user_id',requireAuth,UserController.updateUser);
    userRoutes.get('/agents/', requireAuth,UserController.getAgentByProvince);

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
    formRoutes.get('/:theme?',FormController.getForms);
    formRoutes.delete('/:form_id',requireAuth,FormController.deleteForm);
    formRoutes.post('/fields/:form_id',FieldsController.createFields);
    formRoutes.get('/:form_id/fields',FieldsController.getFields)

    apiRoutes.use('/perimetre',perimetreRoutes);

    perimetreRoutes.get('/region', PerimetreController.getRegion)
    perimetreRoutes.get('/province/:id_region',PerimetreController.getProvinces);
    perimetreRoutes.get('/commune/:id_province',PerimetreController.getCommune)
    perimetreRoutes.get('/communes',requireAuth,PerimetreController.getCommunebyUser);

    // Set up routes
    app.use('/api', apiRoutes);

}