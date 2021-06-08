<template>
  <div>
    <form>
      <input type="text" v-model="todoInput" name="task" placeholder="Enter todo here."/>
      <button type="submit" class="button" v-on:click="addTodoFE" value="addToFront">Add to FE</button>
      <button type="submit" class="button" v-on:click="addTodoBE" value="addToBack">Add to BE</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'TodoInput',
  data () {
    return {
      todoInput: ''
    }
  },
  methods: {
    addTodoFE (e) {
      e.preventDefault()

      const newTodo = {
        id: uuidv4(),
        task: this.todoInput,
        done: false,
        fromBE: false
      }

      // send newTodo to parent (Home.vue).
      this.$emit('add-todo', newTodo)
      this.todoInput = ''
    },
    addTodoBE (e) {
      e.preventDefault()

      const newTodo = {
        task: this.todoInput,
        done: false,
        fromBE: true
      }

      const requestOption = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      }

      fetch('http://localhost:5000/', requestOption)
        .then(res => res.json())
        .then(data => {
          this.$emit('add-todo', newTodo)

          // Add to store
          this.$store.commit('addTodo', newTodo)

        })
        .catch(err => console.log(err))
      this.todoInput = ''
    }
  }
}
</script>
