var { mongoose } = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
var { Todo } = require('./model/todo');
var { User } = require('./model/User');
var port = process.env.PORT || 3000; // for heroku to send the port number

var app = express();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Server started on ", port);
});

app.post('/todos', (req, res) => {
    console.log(req.body);
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then(
        (doc) => {
            res.send(doc)
        },
        err => {
            res.send(err);
        });
});
app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        res.send({
            todos: todos
        });
    }, (err) => {
        res.status(400).send({
            error: err
        });
    })


});
app.get('/todos/:id', (req, res) => {

});