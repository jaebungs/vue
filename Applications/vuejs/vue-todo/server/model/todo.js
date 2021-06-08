const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todo = new Schema({
    task: {
        type: String,
        required: true
    },
    done: Boolean,
    fromBE: Boolean
})
const Todo = mongoose.model('Todo', todo)
module.exports = Todo