import { createStore } from 'vuex'
import { todoStore } from './modules/todo-store'
const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        todoStore
    },
})

export default store
