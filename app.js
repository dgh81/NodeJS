const express = require('express');
const morgan = require('morgan');
const { MongoClient, ServerApiVersion } = require('mongodb');
//mongoose:
const mongoose = require('mongoose');


// express app:
const app = express();


const User = require('./models/user');
// const { result } = require('lodash');


// mongo database connection string:
const dbURI = 'mongodb+srv://user1:1234@cluster0.1kjeku1.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbURI)
 // .then((result) => console.log('connected to db'))
 // server lytter kun hvis der er oprettet forbindelse til db:
 .then((result) => app.listen(3000))
 //"app.listen": autosets Header and status codes and content types
 .catch((err) => console.log(err));
// eller:
mongoose.connect(dbURI, { useNewUrlParser: true, useUnitiedTopology: true});


// // TMP autocode from mongo:
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.1kjeku1.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



//listen for req: (localhost assumed)
// app.listen(5000);


// register view engine (ejs): (kigger automatisk i views folder)
app.set('view engine', 'ejs');
// eller custom folder fx.:
// app.set('views', 'myEjsViews');

 //Middleware and static files. static gør at filer i den tildelte mappe public kan tilgås (uden at referere til mappen, men blot til filerne.)
 //Eksempel i browser: http://localhost:3000/fodbold.jpg
 app.use(express.static('public'));

 //morgan returnerer info - se webpage for andre muligheder end dev.
 // app.use(morgan('dev'));


 // https://cloud.mongodb.com/v2/631cb984b9724e4848ddd60f#metrics/replicaSet/631cba7003e2a654c085c563/explorer/test/users/find:
// mongoose and mongo sandbox routes:
// add user and save user to db:
app.get('/add-user', (req, res) => {
 const user = new User({
  username: 'malene',
  password: '4444'
 });

 user.save()
 .then((result) => {
  res.send(result)
 })
 .catch((err) => {
  console.log(err);
 });
});

// //Vis alle users i db på siden /all-users:
// app.get('/all-users', (req, res) => {
//  User.find()
//   .then((result) => {
//    res.send(result);
//   })
//   .catch((err) => {
//    console.log(err);
//   });
// });

// find by ID:
app.get('/single-user', (req, res) => {
 User.findById('631cd63486c32c11667b5f2e')
 .then((result) => {
   res.send(result);
   console.log(result);
 })
 .catch((err) => {
  console.log(err);
 });
});

 
app.get('/', (req, res) => {
 res.render('index', {title: 'Forside'});
});

app.get('/kontakt', (req, res) => {
 res.render('kontakt', {title: 'Kontakt'});
});

app.get('/kontingent', (req, res) => {
 res.render('kontingent', {title: 'Kontingentinformation'});
});

app.get('/aktiviteter', (req, res) => {
 res.render('aktiviteter', {title: 'Aktiviteter'});
});



app.get('/create', (req, res) => {
 // console.log("test create");
 res.render('create', {title: 'Create user'});
} )

// Denne bruges når ingen andre sider matches med ovenstående: (skal derfor stå til sidst.)
app.use((req, res) => {
 res.status(404).render('404', {title: 'Error'});
});




