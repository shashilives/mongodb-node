//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");


var obj = new ObjectID();
console.log(obj);
// var url = "mongodb://127.0.0.1:27017";
// url shd start with mongodb / server:port / database name
var url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));

    // });
    db.collection('Users').insertOne({
        // _id: 123,
        user: 'Chandru',
        age: 28,
        location: 'Blr'
    }, (err, res) => {
        if (err) {
            return console.log('Unable to insert user');
        }
        console.log(JSON.stringify(res.ops, undefined, 2));

    });

    client.close(); //closes the connection with mongodb
});