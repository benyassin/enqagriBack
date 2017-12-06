var AuthenticationController = require('./controllers/authentication'),
    UserController = require('./controllers/users'),
    BlocController = require('./controllers/bloc'),
    FormController = require('./controllers/form'),
    FieldsController = require('./controllers/fields'),
    PerimetreController = require('./controllers/perimetre'),
    ProjetController = require('./controllers/projet');
    CollecteController = require('./controllers/collecte');
    ReportingController = require('./controllers/reporting');
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport'),
    validate = require('express-validation');
    validation = require('./validation')
let requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    let apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();
        blocRoutes = express.Router();
        formRoutes = express.Router();
        perimetreRoutes = express.Router();
        projetRoutes = express.Router();
        collecteRoutes = express.Router();
        reportingRoutes = express.Router();
    let mobileRoutes = express.Router();
        projetmobileRoutes = express.Router();
        mobileAuthRoutes = express.Router();
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
    userRoutes.get('/controlleurs/',requireAuth,UserController.getControllers)

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
    formRoutes.get('/:form_id/fields',FieldsController.getFields);
    formRoutes.get('/:form_id/extrapolation',FieldsController.getExtrapolationFields);


    // Perimetre Routes
    apiRoutes.use('/perimetre',perimetreRoutes);

    perimetreRoutes.get('/region', PerimetreController.getRegion)
    perimetreRoutes.get('/province/:id_region?',PerimetreController.getProvinces);
    perimetreRoutes.get('/commune/:id_province',PerimetreController.getCommune)
    perimetreRoutes.get('/communes',requireAuth,PerimetreController.getCommunebyUser);
    perimetreRoutes.get('/DpaOffice',PerimetreController.DpaOffice);

    // Projet Routes 
    apiRoutes.use('/projets',projetRoutes);

    projetRoutes.post('/',ProjetController.createProjet);
    projetRoutes.get('/:projet_id?',ProjetController.getProjets);
    projetRoutes.delete('/:projet_id',ProjetController.deleteProjet);
    projetRoutes.get('/projets/test',requireAuth,ProjetController.getProjetsByPerimetre);
    projetRoutes.get('/controller/projets',requireAuth,ProjetController.controllerProjets)


    //Collecte Routes

    apiRoutes.use('/collectes', collecteRoutes);
    collecteRoutes.get('/:id_collecte?',requireAuth,CollecteController.getCollectes);
    collecteRoutes.post('/',requireAuth,CollecteController.storeCollecte);
    collecteRoutes.get('/aggregate/test',CollecteController.aggregate);
    collecteRoutes.get('/projet/:id_projet',CollecteController.getCollecteByProjet);
    collecteRoutes.post('/validate',CollecteController.validate);
    collecteRoutes.get('/traitement/:id_projet',CollecteController.getCollecteEnTraitement);

    //Reporting Routes

    apiRoutes.use('/reporting',reportingRoutes);
    reportingRoutes.get('/dashboard/',ReportingController.getReports);
    reportingRoutes.get('/dashboards/',ReportingController.aggregatee);


    //mobile routes

    mobileRoutes.use('/projets',projetmobileRoutes);
    projetmobileRoutes.get('/',requireAuth,ProjetController.getProjetsByRoleMobile);

    mobileRoutes.use('/auth', mobileAuthRoutes);
    mobileAuthRoutes.post('/login',requireLogin,AuthenticationController.loginMobile);
    // Set up routes
    app.use('/api', apiRoutes);

    app.use('/mobile',mobileRoutes);


}