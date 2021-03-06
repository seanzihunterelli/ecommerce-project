//reqs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const config = require('./config');
const http = require('http');
const connectionString = config.databaseLocation;
const massiveInstance = massive.connectSync({ connectionString: connectionString });
const app = express();
const port = 8777;

//app setup
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
  })
);
//db setup
app.set('db', massiveInstance);
module.exports = app;
http.createServer(app).listen(port, function(){
  console.log(`listening on port ${port}`);
});
const db = app.get('db');

const productCtrl = require('./controllers/productCtrl');
const userCtrl = require('./controllers/userCtrl');

//endpoints

app.get('/products', productCtrl.getProducts);
app.get('/products/:id', productCtrl.getProduct);
