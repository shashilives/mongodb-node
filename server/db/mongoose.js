let mongoose = require('mongoose');
let url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(url, () => {
    console.log("connection estbd");

});

module.exports = {
    mongoose: mongoose
}
