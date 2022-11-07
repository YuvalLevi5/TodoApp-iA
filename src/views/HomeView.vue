<template>
  <div class="main-page">
    <todo-filter @filtered="setFilter" />
    <todo-list v-if="todosToShow" :todos="todosToShow" @removedTodo="removeTodo" @toggleTodo="toggleTodo" />
    <div class="flex gap-1 flex-col my-1">
      <router-link class="btn btn-success link text-center" to="/todo/add">Add Todo</router-link>
      <button class="btn btn-danger text-center" @click="clearAllTodos">Clear all todos</button>
    </div>
  </div>
</template>

<script>
import todoList from '../components/todo-list.vue';
import todoFilter from '../components/todo-filter.vue';
export default {
  components: {
    todoList,
    todoFilter
  },
  methods: {
    removeTodo(todoId) {
      this.$store.commit({ type: 'removeTodo', todoId })
    },
    toggleTodo(todoId) {
      this.$store.commit({ type: 'toggleIsDone', todoId })
    },
    clearAllTodos() {
      this.$store.commit({ type: 'removeTodos' })
    },
    setFilter(filterBy) {
      this.$store.commit({ type: 'setFilter', filterBy })
    },
  },
  computed: {
    todosToShow() {
      return this.$store.getters.filteredTodos
    },
  },

}
</script>