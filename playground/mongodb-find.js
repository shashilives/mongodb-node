//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp')

    // db.collection('Users').find({age : 28}).toArray()
    //     .then((docs) => {
    //         console.log(docs);

    //     }, (err => {
    //         console.log(err);

    //     }));
    // db.collection('Users').find().count()
    // .then((docs) => {
    //     console.log(docs);

    // }, (err => {
    //     console.log(err);

    // }));
    db.collection('Users').find({ user: 'Chandru' })
        .toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));

        });

    client.close();
});