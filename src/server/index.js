const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const server = express();
// the value for dbname should match your database name
const dbname = 'imdb';

// serve files from the dist directory
server.use(express.static('dist'));

// the URL to the DB will be loaded from an env variable or using the MongoDB Clour
const dbroute = process.env.MONGODB_URL || 'mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/test?retryWrites=true&w=majority';

let db;

// connect to the DB and then start the expres server
MongoClient.connect(dbroute, (err, client) => {
  if (err) throw err;

  db = client.db(dbname);
  // start the express web server listening
  server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// DEFINE ENDPOINTS

// retrieve all user objects from DB
server.get('/movies', (req, res) => {
  db.collection('movie').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/movies/:id', (req, res) => {
  db.collection('movie').findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete user with specific ID from DB
server.delete('/movies', (req, res) => {
  db.collection('movie').deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new user based on info supplied in request body
server.post('/movies', (req, res) => {


  const myData = {
    title : req.body.title,
    director : req.body.director,
    year : parseInt(req.body.year),
    poster : req.body.poster,
    american : (/true/i).test(req.body.real)
  };

  db.collection('movie').insert(myData, (err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update user based on info supplied in request body
server.put('/movies', (req, res) => {
  // get the ID of the user to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;

  const myData = {
    title : req.body.title,
    director : req.body.director,
    year : parseInt(req.body.year),
    poster : req.body.poster,
    american : (/true/i).test(req.body.real)
  };

  // find a user matching this ID and update their details
  db.collection('movie').updateOne( {_id: new ObjectID(id) }, {$set: myData}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});
