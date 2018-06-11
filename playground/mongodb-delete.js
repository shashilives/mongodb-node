//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

var url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('TodoApp');
    //delete many
    // db.collection('Users').deleteMany({ location: 'Blr' })
    //     .then((res) => {
    //         console.log(res);

    //     })

    //delete one 

    // db.collection('Users')
    //     .deleteOne({ location: 'Blr' })
    //     .then((res) => {
    //         console.log(res);

    //     })
    //find one and delete == return the deleted document
    // db.collection('Users').findOneAndDelete({ location: 'Blr' })
    //     .then(res => { console.log(res) });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b1e7befc46a61503167d99a") })
        .then(
            res => console.log(res)
        );
    client.close();
});