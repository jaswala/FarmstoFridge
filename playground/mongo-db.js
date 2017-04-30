// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/dev', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('farms').find().toArray().then((docs) => {
//       console.log('farms');
//       console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//       console.log('unable to fetch farms')
//   });


    db.collection('farms').find().count().then((count) => {
      console.log(`farms count ${count}`);
     // console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
      console.log('unable to fetch farms')
  });


  db.close();
});
