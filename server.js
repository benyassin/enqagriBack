var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression')
var cors = require('cors');

var databaseConfig = require('./config/database');
var router = require('./app/routes');

mongoose.Promise = global.Promise;
mongoose.connect(databaseConfig.url,{
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true,});

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");

app.use(bodyParser.urlencoded({limit: '50mb', extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'})); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
app.use(compression());
router(app);