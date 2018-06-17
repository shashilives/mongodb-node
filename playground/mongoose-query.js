const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/model/todo');

var id = '5b1e85d01571ab3b50023a3a';

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2));
});

Todo.findById(id).then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2));
});
