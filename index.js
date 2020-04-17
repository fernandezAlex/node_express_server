//**** Create server with Node js

// const http = require('http');

// http.createServer((req, res) => {
//  res.end("Server created with Node js");
// }).listen(3000);

// Put in the terminal "node index.js" to start the server in the port 3000     

//**** Create server with EXPRESS

const express = require('express');
const app = express();
app.listen(3000, function(){
    console.log('server working');
    console.log('Nombre de la App: '+ app.get('appName'));
});

// *******Require Routes
const routes = require('./routes');
app.use(routes);
// Api Routes
const routesApi = require('./routes-api.js')
app.use('/api', routesApi);
// Not found Routes (error)
const routesError = require('./routes-error.js')
app.use('*', routesError);

//**** Settings
app.set('appName', 'Mi primer server con Express');
app.set('views', __dirname + '/views');
// It's to say the directori root where is this file
// console.log(__dirname);

// EJS Motor de plantillas HTML, de lo más conocidos que añade funcionalidad de lenguaje de progrmación al HTML, en este caso JSON, otros motores: Handlebars, Pugs, etc...
app.set('view engine', 'ejs');

//**** Middlewares // They are the moduls of express that manage the request in the server
// WE CREATE A REGGISTER OF REQUEST IN THE SERVER
app.use(function(req, res, next){
    console.log('request url: ' + req.url);
    next();
});

// MORGAN is a module (middleware), makes the work of before to reggister the request
const morgan = require('morgan');
// Difetents metod of Morgan
// app.use(morgan('dev')); // Give a short logg with fell information
app.use(morgan('combined')); // Give a long logg with fell information





