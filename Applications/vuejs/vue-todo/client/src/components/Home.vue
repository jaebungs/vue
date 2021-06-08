<template>
  <div>
    <h1 class="title" >Vue Todo</h1>
    <h2>{{msg}}</h2>
    <!-- v-on to catch $emit from child. and run function in this script. -->
    <TodoInput v-on:add-todo="addTodoFE"/>
    <TodoLists v-bind:todos="todos" v-on:save-todos="saveTodos" />
  </div>
</template>

<script>
import eventBus from '../eventBus/eventBus'
import TodoLists from './TodoLists/TodoLists'
import TodoInput from './Input/TodoInput'

export default {
  name: 'Home',
  components: {
    TodoInput, TodoLists
  },
  data () {
    return {
      todos: this.$store.state.todos,
      // [
      //   {_id: 0, task: 'grocery', done: false, fromBE: false},
      //   {_id: 1, task: 'Feed Sasha', done: true, fromBE: false}
      // ],
      msg: `I'm earning vue by making a simple project.`
    }
  },
  mounted () {
    fetch('http://localhost:5000/getTodos')
      .then(res => res.json())
      .then(data => {
        // Change state without Vuex.
        // this.todos = [...this.todos, ...data]

        //with Vuex
        // Add todos to store.
        console.log(data)
        this.$store.commit('initTodos', data)
      })
      .catch(err => console.log(err))
  },
  created () {
    eventBus.$on('delete-todo', (id) => {
      this.deleteTodo(id)
    })
    eventBus.$on('update-todo', (newTodo) => {
      this.updateTodo(newTodo)
    })
  },
  methods: {
    saveTodos () {
      this.todos = this.todos.filter(todo => {
        console.log('save fired from child component. Vue is easier to access parant state!')
        return todo.done === false
      })
    },
    addTodoFE (newTodo) {
      this.todos = [...this.todos, newTodo]
    },
    deleteTodo (id) {
      const requestOption = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      }
      // remove from DB
      if (id.length > 9) {
        fetch(`http://localhost:5000/delete/${id}`, requestOption)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err))
      }
      // remove from state
      this.todos = this.todos.filter(todo => todo._id !== id)
    },
    updateTodo (newTodo) {
      const requestOption = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      }
      if (newTodo._id.length > 9) {
        fetch(`http://localhost:5000/update`, requestOption)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
