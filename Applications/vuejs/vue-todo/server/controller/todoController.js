const { getTodosService, addTodoService, deleteTodoService, updateTodoService } = require('../services/todoServices');

const getTodos = async (req, res) => {
    try {
        const todos = await getTodosService();
        res.json(todos)
    } catch (err) {
        res.status(500).json({ message: 'Fetch Todo failed.', err })
    }
}

const addTodo = async (req, res) => {
    try {
        const todo = await addTodoService(req.body);
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Add Todo failed', err: err })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = await deleteTodoService(req.params.id);
        res.json(`Delete ${req.params.id} todo was successful.`)
    } catch (err) {
        res.status(500).json({ message: 'Delete Todo failed', err})
    }
}

const saveTodos = () => {

}

const changeDone = async (req, res) => {
    try {
        console.log(req.body)
        const todo = await updateTodoService(req.body._id, req.body)
        res.json('Update Successful.')
    } catch (err) {
        res.status(500).json({ message: 'Update Todo failed.', err })
    }
}

module.exports = { getTodos, addTodo, deleteTodo, saveTodos, changeDone }