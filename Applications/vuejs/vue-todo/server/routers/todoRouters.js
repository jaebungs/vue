const express = require('express');
const { getTodos, addTodo, deleteTodo, saveTodos, changeDone } = require('../controller/todoController');

const router = express.Router();

router.get('/getTodos', getTodos);
router.post('/', addTodo);
router.post('/update', changeDone);
router.post('/delete/:id', deleteTodo);

module.exports = router;