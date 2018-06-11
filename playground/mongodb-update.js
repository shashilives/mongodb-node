//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        { name: 'chandru' },
        { $set: { age: 23 } },
        { returnOriginal: false })
        .then(
            res => console.log(res)
        );
    client.close();
});