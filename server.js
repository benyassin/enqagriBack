var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression')
var cors = require('cors');
var path    = require("path");



var databaseConfig = require('./config/database');
var router = require('./app/routes');


mongoose.Promise = global.Promise;
mongoose.connect(databaseConfig.url,{
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true,});



app.listen(80);
console.log("App listening on port 8080");

app.use(bodyParser.urlencoded({limit: '50mb', extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'})); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
app.use(compression());

app.use('/public', express.static(path.join(__dirname + '/ng')));
app.use('/', express.static(path.join(__dirname + '/angular')));

app.use('/download', function(req, res){
    let file = __dirname + '/apk/apk-v1.0.0.txt';
    res.download(file);
});




router(app);