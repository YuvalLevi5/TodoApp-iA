import { utilService } from '../../services/util-service'

export const todoStore = {
  state: {
    todos: [
      {
        _id: 'Yca2f',
        title: 'Bake a cake',
        isDone: false
      },
      {
        _id: 'Ip43D',
        title: 'Workout',
        isDone: false
      },
      {
        _id: 'HCgVJ',
        title: 'Study',
        isDone: false
      }
    ],
    filterBy: {
      title: '',
      isDone: null,
      toSort: false,
    },
  },
  getters: {
    filteredTodos({ filterBy, todos }) {
      if (!todos) return

      const regex = new RegExp(filterBy.title, 'i')
      let filteredTodos = todos.filter((todo) => regex.test(todo.title))

      if (filterBy.isDone !== null) {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.isDone === filterBy.isDone
        )
      }

      if (filterBy.toSort) {
        filteredTodos.sort((t1, t2) => t1.title.localeCompare(t2.title))
      }

      return filteredTodos
    },
  },
  mutations: {
    setTodos(state, { todos }) {
      state.todos = todos
    },
    deleteTodo(state, { todoId }) {
      const idx = state.todos.findIndex((todo) => todo._id === todoId)
      state.lastRemovedTodo = state.todos[idx]
      state.todos.splice(idx, 1)
    },
    addTodo(state, { todo }) {
      todo._id = utilService.makeId()
      state.todos.unshift(todo)
    },
    updateTodo(state, { todo }) {
      const idx = state.todos.findIndex((p) => p._id === todo._id)
      state.todos.splice(idx, 1, todo)
    },
    toggleIsDone(state, { todoId }) {
      const todo = state.todos.find((todo) => todo._id === todoId)
      todo.isDone = !todo.isDone
    },
    removeTodo(state, { todoId }) {
      const idx = state.todos.findIndex((todo) => todo._id === todoId)
      state.todos.splice(idx, 1)
    },
    removeTodos(state) {
      state.todos = []
    },
    setFilter(state, { filterBy }) {
      state.filterBy = { ...filterBy }
    },
  },
  actions: {
    getById({ state }, { todoId }) {
      const idx = state.todos.findIndex((todo) => todo._id === todoId)
      return state.todos[idx]
    }
  },
}
