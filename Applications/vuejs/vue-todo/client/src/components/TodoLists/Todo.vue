<template>
  <div class="todo-item">
    <!-- v-bind:class="{'is-done':todo.done}". css line-through if task is done. -->
    <p class="task" v-bind:class="{ 'is-done': todo.done }">
      Task: {{ todo.task }}
    </p>
    <label class="done">
      <!-- wow.. state just changes not like react? -->
      <input type="checkbox" v-model="todo.done" name="done" id="done" v-on:click="updateTodo"/>
    </label>
    <button class="delete-button" :value="todo._id" v-on:click="deleteTodo" >
      X
    </button>
    <!-- if todo is from database, omit this p. -->
    <p class="notice" v-if="!todo.fromBE">* Sample data (only in Front-End).</p>
  </div>
</template>

<script>
import eventBus from '../../eventBus/eventBus'

export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    deleteTodo () {
      // eventBus.$emit('delete-todo', this.todo._id) //without Vuex
      this.$store.commit('deleteTodo', this.todo._id)
    },
    updateTodo (e) {
      const newTodo = {
        ...this.todo,
        done: e.target.checked
      }
      // eventBus.$emit('update-todo', newTodo) //without Vuex
      this.$store.commit('updateTodo', newTodo)
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
}
.task {
  margin-right: 1.3rem;
}

.is-done {
  text-decoration: line-through;
}

.notice {
  margin: 0 4rem;
}

.delete-button {
  background-color: red;
  border: 1px solid #000;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  margin: 0 1rem;
}
</style>
