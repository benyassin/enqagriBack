var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression')
var cors = require('cors');
var path    = require("path");
var fs = require('fs');
var multer = require('multer');


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

app.use('/public', express.static(path.join(__dirname + '/ng')));
app.use('/angular', express.static(path.join(__dirname + '/angular')));




var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

// app.use(multer({
//     dest: DIR,
//     rename: function (fieldname, filename) {
//       return filename + Date.now();
//     },
//     onFileUploadStart: function (file) {
//       console.log(file.originalname + ' is starting ...');
//     },
//     onFileUploadComplete: function (file) {
//       console.log(file.fieldname + ' uploaded to  ' + file.path);
//     }
//   }));

   
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});

router(app);