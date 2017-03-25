//reqs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const userCtrl = require('./controllers/userCtrl');
const productCtrl = require('./controllers/productCtrl');
const config = require('./config');
const http = require('http');
const connectionString = config.databaseLocation;
const massiveInstance = massive.connectSync({ connectionString: connectionString });
const app = module.exports = express();
const port = 8777;

//app setup
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
  })
);

//db setup
app.set('db', massiveInstance);
const db = app.get('db');


//endpoints
app.get('/products', productCtrl.getProducts());


app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
