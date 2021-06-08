<template>
  <div>
    <h3>todo lists</h3>
    <div class="flex center">
      <button class="button" @click="$emit('save-todos')" >Save</button>
      <p>* Save will erase finished tasks (only Front-end data.).</p>
    </div>
      <ul>
        <li class="todo-li" v-for="todo in this.$store.state.todos" :key="todo.id">
          <Todo v-bind:todo="todo" />
        </li>
      </ul>

  </div>
</template>

<script>
import Todo from './Todo'

export default {
  name: 'TodoLists',
  components: {
    Todo
  },
  // props: ['todos'] // without Vuex
}
</script>

<style scoped>
  .todo-li {
    border: 1px solid #000;
    list-style-type: none;
    padding: 0 1rem;
    margin: 0.5rem;
  }
</style>
