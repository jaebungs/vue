import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {_id: 0, task: 'grocery', done: false, fromBE: false},
      {_id: 1, task: 'Feed Sasha', done: true, fromBE: false}
    ]
  },
  mutations: {
    initTodos (state, todos) {
      console.log(todos)
      state.todos = [...state.todos, ...todos]
    },
    addTodo: function (todo) {
      this.state.todos = [...this.state.todos, todo]
    },
    deleteTodo (state, id) {
      state.todos = state.todos.filter(todo => todo._id !== id)
    },
    updateTodo (state, newTodo) {
      const newTodos = state.todos.filter(todo => todo._id !== newTodo._id)
      state.todos = [...newTodos, newTodo]
    }
  }
})

export default store
