const Todo = require('../model/todo');

const getTodosService = () => {
    return Todo.find();
}

const addTodoService = (todo) => {
    return Todo.create({
        task: todo.task,
        done: false,
        fromBE: true
    })
}

const deleteTodoService = (id) => {
    return Todo.findByIdAndDelete(id)
}

const updateTodoService = (id, data) => {
    return Todo.updateOne({_id: id}, {
        task: data.task,
        done: data.done,
        fromBE: true
    })
}

module.exports = { getTodosService, addTodoService, deleteTodoService, updateTodoService }